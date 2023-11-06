import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from '../user.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto';
import { PerfilEnum } from '../entities/perfil.entity';
import { AuthUserDto } from '../dto/auth-user.dto';
import * as bcrypt from 'bcrypt';

describe('UserService', () => {
    let service: UserService;
    let repository: Repository<User>;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                UserService,
                {
                    provide: getRepositoryToken(User),
                    useValue: {
                        create: jest.fn(),
                        save: jest.fn(),
                        find: jest.fn(),
                        findAll: jest.fn(),
                        findOne: jest.fn(),
                        remove: jest.fn(),
                        auth: jest.fn(),
                    }
                }
            ],
        }).compile();

        service = module.get<UserService>(UserService);
        // repository = module.get(getRepositoryToken(User)); - tanto faz, aceita os dois
        repository = module.get<Repository<User>>(getRepositoryToken(User));
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
        expect(repository).toBeDefined();
    });

    describe('create', () => {
        it('Deveria salvar o usuário no banco', async () => {
            // Arrange
            const data: CreateUserDto = {
                matricula: '123',
                nome: 'Usuário de teste',
                perfil: PerfilEnum.Gerente,
                senha: '123',
                verificado: false
            }

            const userEntityMock = { ...data } as User;

            jest.spyOn(repository, 'create').mockReturnValueOnce(userEntityMock) // esse metodo create retorna um valor uma unica vez
            jest.spyOn(repository, 'save').mockResolvedValueOnce(userEntityMock) // o metodo save retorna uma promisse ja resolvida
            jest.spyOn(repository, 'findOne').mockResolvedValueOnce(null)

            // Act
            const result = await service.create(data);

            // Assert
            expect(result).toBeDefined();
            expect(repository.save).toHaveBeenCalledTimes(1);
            expect(repository.create).toHaveBeenCalledTimes(1);
            expect(repository.findOne).toHaveBeenCalledTimes(1);
        })

        it('Deveria lançar um erro se o usuário fosse encontrado', async () => {
            // Arrange
            const data: CreateUserDto = {
                matricula: '123123123',
                nome: 'Usuário de teste',
                perfil: PerfilEnum.Gerente,
                senha: '123',
                verificado: false
            }

            const userEntityMock = { ...data } as User;

            jest.spyOn(repository, 'findOne').mockResolvedValueOnce(userEntityMock)
            jest.spyOn(repository, 'create').mockReturnValueOnce(userEntityMock) // esse metodo create retorna um valor uma unica vez
            jest.spyOn(repository, 'save').mockResolvedValueOnce(userEntityMock) // o metodo save retorna uma promisse ja resolvida

            // Assert
            await expect(service.create(data)).rejects.toThrow('Matrícula já existe no banco de dados');
            expect(repository.findOne).toHaveBeenCalledTimes(1);
        })

        it('Deveria lançar erro se vier campo vazio', async () => {
            // Arrange
            const data: CreateUserDto = {
                matricula: '',
                nome: '',
                perfil: PerfilEnum.Gerente,
                senha: '',
                verificado: false
            }

            // Act and Assert
            await expect(service.create(data)).rejects.toThrow('Todos os campos são obrigatórias.');
        })
    });


    describe('auth', () => {
        it('Deveria retornar usuário logado', async () => {
            // Arrange
            const data: AuthUserDto = {
                matricula: '123',
                senha: '123'
            }

            const hashedPassword = bcrypt.hashSync(data.senha, 10);

            const userEntityMock = {
                ...data,
                senha: hashedPassword,
                nome: 'Teste',
                perfil: PerfilEnum.Gerente,
                verificado: false,
            } as User;

            jest.spyOn(repository, 'findOne').mockResolvedValueOnce(userEntityMock)

            // Act
            const result = await service.auth(data);

            // Assert
            expect(result).toEqual({
                nome: userEntityMock.nome,
                matricula: userEntityMock.matricula,
                verificado: userEntityMock.verificado,
                perfil: userEntityMock.perfil,
            });
            expect(repository.findOne).toHaveBeenCalledTimes(1);
        });

        it('Deveria lançar um erro se matrícula ou senha estiverem vazias', async () => {
            // Arrange
            const data: AuthUserDto = {
                matricula: '',
                senha: ''
            }

            // Act and Assert
            await expect(service.auth(data)).rejects.toThrow('Matrícula e senha são obrigatórias.');
        });

        it('Deveria lançar um erro se o usuário não for encontrado', async () => {
            // Arrange
            const data: AuthUserDto = {
                matricula: '123',
                senha: '123'
            }

            jest.spyOn(repository, 'findOne').mockResolvedValueOnce(null)

            // Act and Assert
            await expect(service.auth(data)).rejects.toThrow('Usuário não encontrado');
        });

        it('Deveria lançar um erro se a senha for inválida', async () => {
            // Arrange
            const data: AuthUserDto = {
                matricula: '123',
                senha: '123'
            }

            const userEntityMock = { ...data, senha: bcrypt.hashSync('wrong_password', 10) } as User;

            jest.spyOn(repository, 'findOne').mockResolvedValueOnce(userEntityMock)

            // Act and Assert
            await expect(service.auth(data)).rejects.toThrow('Credenciais inválidas.');
        })
    });


    describe('pendente', () => {
        it('Deveria retornar todos os usuários não verificados', async () => {
            // Arrange
            const userEntityMock = [
                { 
                    nome: 'Usuário de teste', 
                    matricula: '123123123', 
                    perfil: 'Gerente', 
                    verificado: false 
                }
            ] as User[];

            jest.spyOn(repository, 'find').mockResolvedValueOnce(userEntityMock)

            // Act
            const result = await service.pendente();

            // Assert
            expect(result).toBeDefined();
            expect(result).toEqual(userEntityMock);
            expect(repository.find).toHaveBeenCalledTimes(1);
        })
    })


    describe('verify', () => {
        it('Deveria verificar um usuário', async () => {
            // Arrange
            const matricula = '123123123';
            
            const userEntityMock = { 
                nome: 'Usuário de teste', 
                matricula: matricula, 
                perfil: 'Gerente', 
                verificado: false,
                senha: '123'
            } as User;
            
            const userEntityMockTrue = {
                ...userEntityMock,
                verificado: true,
            } as User;

            jest.spyOn(repository, 'findOne').mockResolvedValueOnce(userEntityMock)
            jest.spyOn(repository, 'save').mockResolvedValueOnce(userEntityMockTrue)

            // Act
            await service.verify(matricula);

            // Assert
            expect(repository.findOne).toHaveBeenCalledTimes(1);
            expect(repository.save).toHaveBeenCalledTimes(1);
        });

        it('Deveria lançar um erro se matrícula estiver vazia', async () => {
            // Arrange
            const matricula = '';

            // Act and Assert
            await expect(service.verify(matricula)).rejects.toThrow(new Error("Matrícula é obrigatória"));
        })

        it('Deveria lançar um erro se o usuário não for encontrado', async () => {
            // Arrange
            const matricula = '123sd123123';

            jest.spyOn(repository, 'findOne').mockResolvedValueOnce(null)

            // Act and Assert
            await expect(service.verify(matricula)).rejects.toThrow(new Error("Usuário não encontrado"));
        });
    })


    describe('remove', () => {
        it('Deveria excluir um usuário não verificado do banco', async () => {
            // Arrange
            const matricula = '123'

            const userEntityMock = {
                matricula: matricula,
                nome: 'Usuário de teste',
                perfil: PerfilEnum.Gerente,
                senha: '123',
                verificado: false
            } as User;

            jest.spyOn(repository, 'remove').mockResolvedValue(userEntityMock)
            jest.spyOn(repository, 'findOne').mockResolvedValueOnce(userEntityMock)

            // Act
            const result = await service.remove(matricula);

            // Assert
            expect(result).toBeDefined();
            expect(repository.findOne).toHaveBeenCalledTimes(1);
            expect(repository.remove).toHaveBeenCalledTimes(1);
        })

        it('Deveria lançar um erro se o usuário não for encontrado', async () => {
            // Arrange
            const matricula = '1231231231222';

            jest.spyOn(repository, 'findOne').mockResolvedValueOnce(null)

            // Act and Assert
            await expect(service.remove(matricula)).rejects.toThrow('Usuário não encontrado');
            expect(repository.findOne).toHaveBeenCalledTimes(1);
        })

        it('Deveria lançar um erro se o usuário for verificado', async () => {
            // Arrange
            const matricula = '123123123';
            const userEntityMock = { matricula, verificado: true } as User;

            jest.spyOn(repository, 'findOne').mockResolvedValueOnce(userEntityMock)

            // Act and Assert
            await expect(service.remove(matricula)).rejects.toThrow('Usuário verificado não pode ser excluido');
            expect(repository.findOne).toHaveBeenCalledTimes(1);
        })
    });
});
