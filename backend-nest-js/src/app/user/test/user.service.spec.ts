import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from '../user.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto';
import { PerfilEnum } from '../entities/perfil.entity';

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
                        save: jest.fn()
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
                matricula: '123123123',
                nome: 'Usuário de teste',
                perfil: PerfilEnum.Gerente,
                senha: '123',
                verificado: false
            }

            const userEntityMock = {
                matricula: '123123123',
                nome: 'Usuário de teste',
                perfil: PerfilEnum.Gerente,
                senha: '123',
                verificado: false
            } as User;

            jest.spyOn(repository, 'create').mockReturnValueOnce(userEntityMock) // esse metodo create retorna um valor uma unica vez
            jest.spyOn(repository, 'save').mockResolvedValueOnce(userEntityMock) // o metodo save retorna uma promisse ja resolvida

            // Act
            const result = await service.create(data);

            // Assert
            expect(result).toBeDefined();
            expect(repository.save).toHaveBeenCalledTimes(1);
            expect(repository.create).toHaveBeenCalledTimes(1);
        })
    })
});
