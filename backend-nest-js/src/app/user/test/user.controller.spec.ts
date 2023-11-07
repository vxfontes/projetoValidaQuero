import { Test, TestingModule } from '@nestjs/testing';
import { HttpException, HttpStatus } from '@nestjs/common';
import { UserController } from '../user.controller';
import { UserService } from '../user.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';
import { PerfilEnum } from '../entities/perfil.entity';
import { AuthUserDto } from '../dto/auth-user.dto';
import { usuariosMock } from '../dto/get-user.dto';

describe('UserController', () => {
    let controller: UserController;
    let service: UserService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [UserController],
            providers: [
                UserService,
                {
                    provide: getRepositoryToken(User), // suprir a necessidade dos providers
                    useValue: {
                        create: jest.fn()
                    }
                }
            ],
        }).compile();

        controller = module.get<UserController>(UserController);
        service = module.get<UserService>(UserService);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
        expect(service).toBeDefined();
    });

    describe('create', () => {
        it('Deveria salvar um novo usuário no banco', async () => {
            // Arrange
            const body: CreateUserDto = {
                matricula: '123123123',
                nome: 'Usuário de teste',
                perfil: PerfilEnum.Gerente,
                senha: '123',
                verificado: false
            }

            const userEntityMock = { ...body } as User;
            const res = { status: jest.fn().mockReturnThis(), json: jest.fn() }; // mock do objeto de resposta

            jest.spyOn(service, 'create').mockResolvedValueOnce(userEntityMock) // o metodo save retorna uma promisse ja resolvida

            // Act
            await controller.create(body, res as any);

            // Assert
            expect(res.status).toHaveBeenCalledWith(201);
            expect(res.json).toHaveBeenCalledWith({ status: 'success', message: 'Usuário criado com sucesso', usuario: userEntityMock });
            expect(service.create).toHaveBeenCalledTimes(1);
        });

        it('Deveria lançar um erro se a criação falhar', async () => {
            // Arrange
            const body: CreateUserDto = {
                matricula: '123123123',
                nome: 'Usuário de teste',
                perfil: PerfilEnum.Gerente,
                senha: '123',
                verificado: false
            }
            const res = { status: jest.fn().mockReturnThis(), json: jest.fn() }; // mock do objeto de resposta

            jest.spyOn(service, 'create').mockRejectedValueOnce(new Error());

            // Act and Assert
            await expect(controller.create(body, res as any)).rejects.toThrow(HttpException);
            expect(service.create).toHaveBeenCalledTimes(1);
        })
    })


    describe('auth', () => {
        it('Deveria autenticar usuario do banco', async () => {
            // Arrange
            const data: AuthUserDto = {
                matricula: '123',
                senha: '123'
            }

            const userEntityMock = {
                ...data,
                nome: 'Teste',
                perfil: PerfilEnum.Gerente,
                verificado: false,
            } as User;

            const res = { status: jest.fn().mockReturnThis(), json: jest.fn() }; // mock do objeto de resposta

            jest.spyOn(service, 'auth').mockResolvedValueOnce(userEntityMock) // o metodo save retorna uma promisse ja resolvida

            // Act
            await controller.auth(data, res as any);

            // Assert
            expect(res.status).toHaveBeenCalledWith(201);
            expect(res.json).toHaveBeenCalledWith({ status: 'success', message: 'Login efetuado com sucesso', usuario: userEntityMock });
            expect(service.auth).toHaveBeenCalledTimes(1);
        });

        it('Deveria lançar um erro se a autenticação falhar', async () => {
            // Arrange
            const data: AuthUserDto = {
                matricula: '123',
                senha: '123'
            }
            const res = { status: jest.fn().mockReturnThis(), json: jest.fn() }; // mock do objeto de resposta

            jest.spyOn(service, 'auth').mockRejectedValueOnce(new Error())

            // Act and Assert
            await expect(controller.auth(data, res as any)).rejects.toThrow(HttpException);
            expect(service.auth).toHaveBeenCalledTimes(1);
        });
    });


    describe('pendente', () => {
        it('Deveria retornar todos os usuários pendentes', async () => {
            // Arrange
            const userEntityMock = [
                {
                    nome: 'Usuário de teste',
                    matricula: '123123123',
                    perfil: 'Gerente',
                    verificado: false
                }
            ] as User[];
            const res = { status: jest.fn().mockReturnThis(), json: jest.fn() }; // mock do objeto de resposta

            jest.spyOn(service, 'pendente').mockResolvedValueOnce(userEntityMock)

            // Act
            await controller.pendente(res as any);

            // Assert
            expect(res.status).toHaveBeenCalledWith(201);
            expect(res.json).toHaveBeenCalledWith({ status: 'success', message: 'Usuários encontrados com sucesso', usuarios: userEntityMock });
            expect(service.pendente).toHaveBeenCalledTimes(1);
        })
    });


    describe('verify', () => {
        it('Deveria verificar um usuário', async () => {
            // Arrange
            const matricula = '123123123';
            const res = { status: jest.fn().mockReturnThis(), json: jest.fn() }; // mock do objeto de resposta

            jest.spyOn(service, 'verify').mockResolvedValueOnce(undefined)

            // Act
            await controller.verify(matricula, res as any);

            // Assert
            expect(res.status).toHaveBeenCalledWith(201);
            expect(res.json).toHaveBeenCalledWith({ status: 'success', message: 'Usuário verificado com sucesso' });
            expect(service.verify).toHaveBeenCalledTimes(1);
        })

        it('Deveria lançar um erro se a verificação falhar', async () => {
            // Arrange
            const matricula = '123123123';
            const res = { status: jest.fn().mockReturnThis(), json: jest.fn() }; // mock do objeto de resposta

            jest.spyOn(service, 'verify').mockRejectedValueOnce(new Error())

            // Act and Assert
            await expect(controller.verify(matricula, res as any)).rejects.toThrow(HttpException);
            expect(service.verify).toHaveBeenCalledTimes(1);
        });
    })


    describe('remove', () => {
        it('Deveria remover usuario do banco', async () => {
            // Arrange
            const matricula = '123';

            const userEntityMock = {
                matricula: matricula,
                nome: 'Usuário de teste',
                perfil: PerfilEnum.Gerente,
                senha: '123',
                verificado: false
            } as User;

            const res = { status: jest.fn().mockReturnThis(), json: jest.fn() }; // mock do objeto de resposta

            jest.spyOn(service, 'remove').mockResolvedValueOnce(userEntityMock) // o metodo save retorna uma promisse ja resolvida

            // Act
            await controller.remove(matricula, res as any);

            // Assert
            expect(res.status).toHaveBeenCalledWith(201);
            expect(res.json).toHaveBeenCalledWith({ status: 'success', message: `Usuário de matrícula: ${matricula} deletado com sucesso` });
            expect(service.remove).toHaveBeenCalledTimes(1);
        });

        it('Deveria lançar um erro se a remoção falhar', async () => {
            // Arrange
            const matricula = '123123123';
            const res = { status: jest.fn().mockReturnThis(), json: jest.fn() }; // mock do objeto de resposta

            jest.spyOn(service, 'remove').mockRejectedValueOnce(new Error())

            // Act and Assert
            await expect(controller.remove(matricula, res as any)).rejects.toThrow(HttpException);
            expect(service.remove).toHaveBeenCalledTimes(1);
        });
    });


    describe('findAll', () => {
        it('Deveria retornar todos os usuários', async () => {
            const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

            jest.spyOn(service, 'findAll').mockResolvedValueOnce([{ ...usuariosMock, senha: '123' }]);

            // Act
            await controller.findAll(res as any);

            // Assert
            expect(res.status).toHaveBeenCalledWith(HttpStatus.CREATED);
            expect(res.json).toHaveBeenCalledWith({ status: 'success', message: 'Usuários encontrados com sucesso', usuarios: [{ ...usuariosMock, senha: '123' }] });
            expect(service.findAll).toHaveBeenCalledTimes(1);
        });

        it('Deveria retornar erro caso não encontre usuários', async () => {
            // Arrange
            jest.spyOn(service, 'findAll').mockRejectedValueOnce(new Error('Erro ao obter usuários'));

            const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

            // Act & Assert
            await expect(controller.findAll(res as any)).rejects.toThrow(HttpException);
            expect(service.findAll).toHaveBeenCalledTimes(1);
        });
    });


    describe('findOne', () => {
        it('Deveria retornar todos os usuários', async () => {
            // Arrange
            const matricula = '123';
            const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

            jest.spyOn(service, 'findOne').mockResolvedValueOnce({ ...usuariosMock, senha: '123' });

            // Act
            await controller.findOne(matricula, res as any);

            // Assert
            expect(res.status).toHaveBeenCalledWith(HttpStatus.CREATED);
            expect(res.json).toHaveBeenCalledWith({ status: 'success', message: 'Usuário encontrado com sucesso', usuario: { ...usuariosMock, senha: '123' } });
            expect(service.findOne).toHaveBeenCalledTimes(1);
        });

        it('Deveria retornar erro caso não encontre usuários', async () => {
            // Arrange
            const matricula = '123';
            jest.spyOn(service, 'findOne').mockRejectedValueOnce(new Error());

            const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

            // Act & Assert
            await expect(controller.findOne(matricula, res as any)).rejects.toThrow(HttpException);
            expect(service.findOne).toHaveBeenCalledTimes(1);
        });
    });

});
