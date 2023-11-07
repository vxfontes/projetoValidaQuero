import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Test, TestingModule } from '@nestjs/testing';
import { TemplateService } from '../template.service';
import { Template } from '../entities/template.entity';
import { CreateTemplateDto } from '../dto/create-template.dto';
import { StatusEnum } from '../entities/status.entity';
import { Formato } from '../../formato/entities/formato.entity';
import { User } from '../../user/entities/user.entity';
import { PerfilEnum } from '../../user/entities/perfil.entity';
import { MudarStatusTemplateDto } from '../dto/mudar-status-template.dto';
import { PendenteTemplateDto } from '../dto/pendente-template.dto';

describe('TemplateService', () => {
    let service: TemplateService;
    let templateRepository: Repository<Template>;
    let userRepository: Repository<User>;
    let formatoRepository: Repository<Formato>;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                TemplateService,
                {
                    provide: getRepositoryToken(Template),
                    useValue: {
                        save: jest.fn(),
                        create: jest.fn(),
                        update: jest.fn(),
                        find: jest.fn(),
                        findOne: jest.fn(),
                        findOneBy: jest.fn(),
                        remove: jest.fn(),
                    }
                },
                {
                    provide: getRepositoryToken(User),
                    useValue: {
                        findOne: jest.fn()
                    }
                },
                {
                    provide: getRepositoryToken(Formato),
                    useValue: {
                        findOne: jest.fn()
                    }
                },
            ],
        }).compile();

        service = module.get<TemplateService>(TemplateService);
        templateRepository = module.get<Repository<Template>>(getRepositoryToken(Template));
        formatoRepository = module.get<Repository<Formato>>(getRepositoryToken(Formato));
        userRepository = module.get<Repository<User>>(getRepositoryToken(User));
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
        expect(templateRepository).toBeDefined();
        expect(formatoRepository).toBeDefined();
        expect(userRepository).toBeDefined();
    });


    describe('create', () => {
        it('Deveria criar um template', async () => {
            // Arrange
            const createTemplate: CreateTemplateDto = {
                titulo: 'Template Title',
                descricao: 'Template Description',
                status: StatusEnum.Ativo,
                campos: [
                    { nome: 'Campo 1', tipo: 'object', nulo: false },
                    { nome: 'Campo 2', tipo: 'int64', nulo: true }
                ],
                formato: 1,
                usuario: 'user123',
            };

            const userMock = {
                matricula: '123',
                nome: 'Usuário de teste',
                perfil: PerfilEnum.Gerente,
                senha: '123',
                verificado: true
            } as User;

            const templateEntityMock = {
                ...createTemplate,
                quantidadeCampos: createTemplate.campos.length,
                formato: { id: 1, titulo: 'CSV' } as Formato, // Substitua 1 pelo ID do formato
                usuario: userMock,
                id: 123,
                dataCriacao: new Date(),
                arquivos: []
            };

            jest.spyOn(formatoRepository, 'findOne').mockResolvedValueOnce({ id: 1, titulo: 'CSV' } as Formato);
            jest.spyOn(userRepository, 'findOne').mockResolvedValueOnce(userMock);
            jest.spyOn(templateRepository, 'save').mockResolvedValue(templateEntityMock);
            jest.spyOn(templateRepository, 'create').mockReturnValue(templateEntityMock);

            // Act
            const result = await service.create(createTemplate);

            // Assert
            expect(result).toBeDefined();
            expect(result).toEqual(templateEntityMock);
            expect(templateRepository.create).toHaveBeenCalledTimes(1);
        });

        it('Deveria retornar erro caso não tenha todos os campos', async () => {
            // Arrange
            const createTemplateDto: CreateTemplateDto = {
                titulo: null,  // faltando
                descricao: 'Template Description',
                status: StatusEnum.Ativo,
                campos: [
                    { nome: 'Campo 1', tipo: 'object', nulo: false },
                    { nome: 'Campo 2', tipo: 'int64', nulo: true }
                ],
                formato: 1,
                usuario: 'user123',
            };

            // Act && Assert
            await expect(service.create(createTemplateDto)).rejects.toThrow('Todos os campos são obrigatórios.');
        });

        it('Deveria retornar erro caso o formato não seja encontrado', async () => {
            // Arrange
            const createTemplateDto: CreateTemplateDto = {
                titulo: 'Template Title',
                descricao: 'Template Description',
                status: StatusEnum.Ativo,
                campos: [
                    { nome: 'Campo 1', tipo: 'object', nulo: false },
                    { nome: 'Campo 2', tipo: 'int64', nulo: true }
                ],
                formato: 999,  // não existe
                usuario: 'user123',
            };

            jest.spyOn(formatoRepository, 'findOne').mockResolvedValue(null);

            // Act && Assert
            await expect(service.create(createTemplateDto)).rejects.toThrow('Formato não encontrado no banco de dados');
        });

        it('Deveria retornar erro caso o usuário não seja encontrado', async () => {
            // Arrange
            const createTemplateDto: CreateTemplateDto = {
                titulo: 'Template Title',
                descricao: 'Template Description',
                status: StatusEnum.Ativo,
                campos: [
                    { nome: 'Campo 1', tipo: 'object', nulo: false },
                    { nome: 'Campo 2', tipo: 'int64', nulo: true }
                ],
                formato: 1,
                usuario: 'nonexistentUser',  // Non-existing usuario
            };

            jest.spyOn(formatoRepository, 'findOne').mockResolvedValueOnce({ id: 1, titulo: 'CSV' } as Formato);
            jest.spyOn(userRepository, 'findOne').mockResolvedValue(null);

            // Act && Assert
            await expect(service.create(createTemplateDto)).rejects.toThrow('Usuário não encontrado no banco de dados');
        });

        it('Deveria retornar erro caso o usuário fosse time', async () => {
            // Arrange
            const createTemplate: CreateTemplateDto = {
                titulo: 'Template Title',
                descricao: 'Template Description',
                status: StatusEnum.Ativo,
                campos: [
                    { nome: 'Campo 1', tipo: 'object', nulo: false },
                    { nome: 'Campo 2', tipo: 'int64', nulo: true }
                ],
                formato: 1,
                usuario: '123',
            };

            const userMock = {
                matricula: '123',
                nome: 'Usuário de teste',
                perfil: PerfilEnum.Time,
                senha: '123',
                verificado: true
            } as User;

            jest.spyOn(formatoRepository, 'findOne').mockResolvedValue({ id: 1, titulo: 'CSV' } as Formato);
            jest.spyOn(userRepository, 'findOne').mockResolvedValue(userMock);

            // Act && Assert
            await expect(service.create(createTemplate)).rejects.toThrow('Usuários do time não podem fazer criação de templates');
        });

        it('Deveria retornar erro caso o usuário não fosse verificado', async () => {
            // Arrange
            const createTemplate: CreateTemplateDto = {
                titulo: 'Template Title',
                descricao: 'Template Description',
                status: StatusEnum.Ativo,
                campos: [
                    { nome: 'Campo 1', tipo: 'object', nulo: false },
                    { nome: 'Campo 2', tipo: 'int64', nulo: true }
                ],
                formato: 1,
                usuario: 'user123',
            };

            const userMock = {
                matricula: '123',
                nome: 'Usuário de teste',
                perfil: PerfilEnum.Gerente,
                senha: '123',
                verificado: false
            } as User;

            jest.spyOn(formatoRepository, 'findOne').mockResolvedValueOnce({ id: 1, titulo: 'CSV' } as Formato);
            jest.spyOn(userRepository, 'findOne').mockResolvedValueOnce(userMock);

            // Act && Assert
            await expect(service.create(createTemplate)).rejects.toThrow("Usuários não verificados não podem fazer upload de arquivos");
        });
    });


    describe('mudarStatus', () => {
        it('Deveria trocar o status de um template', async () => {
            // Arrange
            const mudarStatusDto: MudarStatusTemplateDto = {
                id: 1,
                status: StatusEnum.Ativo,
            };

            const existingTemplate = new Template();
            existingTemplate.id = 1;
            existingTemplate.status = StatusEnum.Desativado;

            jest.spyOn(templateRepository, 'findOneBy').mockResolvedValue(existingTemplate);
            jest.spyOn(templateRepository, 'update').mockResolvedValue(undefined);

            // Act
            const result = await service.mudarStatus(mudarStatusDto);

            // Assert
            expect(result).toBeUndefined();
            expect(templateRepository.update).toHaveBeenCalledTimes(1);
        });

        it('Deveria retornar um erro se tiver faltando campos', async () => {
            // Arrange
            const mudarStatusDto: MudarStatusTemplateDto = {
                id: null,
                status: null,
            };

            jest.spyOn(templateRepository, 'findOne').mockResolvedValue(null);

            // Act && Assert
            await expect(service.mudarStatus(mudarStatusDto)).rejects.toThrow("Campos obrigatórios.");
        });

        it('Deveria retornar um erro se o template não seja encontrado', async () => {
            // Arrange
            const mudarStatusDto: MudarStatusTemplateDto = {
                id: 999,  // não existe
                status: StatusEnum.Ativo,
            };

            jest.spyOn(templateRepository, 'findOneBy').mockResolvedValueOnce(null);

            // Act && Assert
            await expect(service.mudarStatus(mudarStatusDto)).rejects.toThrow('Template não encontrado');
        });
    });


    describe('aprovar', () => {
        it('Deveria mudar o status do template para ativo', async () => {
            // Arrange
            const id = 1;

            const existingTemplate = new Template();
            existingTemplate.id = id;
            existingTemplate.status = StatusEnum.Desativado;

            jest.spyOn(templateRepository, 'findOneBy').mockResolvedValue(existingTemplate);
            jest.spyOn(templateRepository, 'update').mockResolvedValue(undefined);

            // Act
            const result = await service.aprovar(id);

            // Assert
            expect(result).toBeUndefined();
            expect(templateRepository.update).toHaveBeenCalledTimes(1);
        });

        it('Deveria retornar um erro se o template não existir', async () => {
            // Arrange
            const id = 999;  // não existe

            jest.spyOn(templateRepository, 'findOneBy').mockResolvedValue(null);

            // Act & Assert
            await expect(service.aprovar(id)).rejects.toThrow('Template não encontrado');
        });

        it('Deveria retornar um erro se tiver faltando o ID', async () => {
            // Arrange
            const id = null;

            jest.spyOn(templateRepository, 'findOneBy').mockResolvedValue(null);

            // Act & Assert
            await expect(service.aprovar(id)).rejects.toThrow("ID é obrigatório.");
        });
    });


    describe('remove', () => {
        it('Deveria excluir apenas templates com status pendente', async () => {
            // Arrange
            const id = 1;

            const existingTemplate = new Template();
            existingTemplate.id = id;
            existingTemplate.status = StatusEnum.Pendente;

            jest.spyOn(templateRepository, 'findOneBy').mockResolvedValue(existingTemplate);
            jest.spyOn(templateRepository, 'remove').mockResolvedValue(existingTemplate);

            // Act
            const result = await service.remove(id);

            // Assert
            expect(result).toBeUndefined();
            expect(templateRepository.remove).toHaveBeenCalledTimes(1);
        });

        it('Deveria lançar erro se template não for encontrado', async () => {
            // Arrange
            const id = 999;  // não existe

            jest.spyOn(templateRepository, 'findOneBy').mockResolvedValue(null);

            // Act & Assert
            await expect(service.remove(id)).rejects.toThrow('Template não encontrado');
        });

        it('Deveria lançar um erro se o template não fosse pendente', async () => {
            // Arrange
            const id = 1;

            const existingTemplate = new Template();
            existingTemplate.id = id;
            existingTemplate.status = StatusEnum.Ativo;  // Não Pendente

            jest.spyOn(templateRepository, 'findOneBy').mockResolvedValue(existingTemplate);

            // Act & Assert
            await expect(service.remove(id)).rejects.toThrow('Template não pode ser excluido pois não é pendente');
        });
    });


    describe('pendente', () => {
        it('Retornar todos os templates pendentes do banco', async () => {
            // Arrange
            const userMock = {
                matricula: '123',
                nome: 'Vanessa',
                perfil: PerfilEnum.Gerente,
                senha: '123',
                verificado: true
            } as User;

            const mainTemplate = {
                titulo: 'Template Title',
                descricao: 'Template Description',
                status: StatusEnum.Ativo,
                campos: [{} as any],
                quantidadeCampos: 2,
                id: 123,
                dataCriacao: new Date(),
            }

            const existingTemplates = [{
                ...mainTemplate,
                formato: { id: 1, titulo: 'CSV' } as Formato, // Substitua 1 pelo ID do formato
                usuario: userMock,
            }] as Template[];

            const mockTemplate: PendenteTemplateDto[] = [{
                ...mainTemplate,
                formato: 'CSV',
                usuario: { nome: userMock.nome, matricula: userMock.matricula },
            }];

            jest.spyOn(templateRepository, 'find').mockResolvedValue(existingTemplates);

            // Act
            const result = await service.pendente();

            // Assert
            expect(result).toBeDefined();
            expect(result).toEqual(mockTemplate);
            expect(templateRepository.find).toHaveBeenCalledTimes(1);
        });
    });

});
