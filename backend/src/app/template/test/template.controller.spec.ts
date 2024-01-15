import { Test, TestingModule } from '@nestjs/testing';
import { HttpException } from '@nestjs/common';
import { getRepositoryToken } from '@nestjs/typeorm';
import { TemplateController } from '../template.controller';
import { TemplateService } from '../template.service';
import { Template } from '../entities/template.entity';
import { Formato } from '../../formato/entities/formato.entity';
import { User } from '../../user/entities/user.entity';
import { CreateTemplateDto } from '../dto/create-template.dto';
import { StatusEnum } from '../entities/status.entity';
import { PerfilEnum } from '../../user/entities/perfil.entity';
import { MudarStatusTemplateDto } from '../dto/mudar-status-template.dto';
import { formattedTemplatesPuroMock, templatesPuroMock } from '../dto/mock-template.dto';

describe('TemplateController', () => {
    let controller: TemplateController;
    let service: TemplateService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [TemplateController],
            providers: [
                TemplateService,
                {
                    provide: getRepositoryToken(Template),
                    useValue: {}
                },
                {
                    provide: getRepositoryToken(Formato),
                    useValue: {},
                },
                {
                    provide: getRepositoryToken(User),
                    useValue: {},
                },
            ],
        }).compile();

        controller = module.get<TemplateController>(TemplateController);
        service = module.get<TemplateService>(TemplateService);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
        expect(service).toBeDefined();
    });


    describe('create', () => {
        it('Deveria criar um novo template no banco', async () => {
            // Arrange
            const body: CreateTemplateDto = {
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
                ...body,
                quantidadeCampos: body.campos.length,
                formato: { id: 1, titulo: 'CSV' } as Formato, // Substitua 1 pelo ID do formato
                usuario: userMock,
                id: 123,
                dataCriacao: new Date(),
            } as Template;

            const res = { status: jest.fn().mockReturnThis(), json: jest.fn() }; // mock do objeto de resposta

            jest.spyOn(service, 'create').mockResolvedValueOnce(templateEntityMock) // o metodo save retorna uma promisse ja resolvida

            // Act
            await controller.create(body, res as any);

            // Assert
            expect(res.status).toHaveBeenCalledWith(201);
            expect(res.json).toHaveBeenCalledWith({ status: 'success', message: 'Template criado com sucesso' });
            expect(service.create).toHaveBeenCalledTimes(1);
        });

        it('Deveria lançar um erro se a criação falhar', async () => {
            // Arrange
            const body: CreateTemplateDto = {
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

            const res = { status: jest.fn().mockReturnThis(), json: jest.fn() }; // mock do objeto de resposta

            jest.spyOn(service, 'create').mockRejectedValueOnce(new Error());

            // Act and Assert
            await expect(controller.create(body, res as any)).rejects.toThrow(HttpException);
            expect(service.create).toHaveBeenCalledTimes(1);
        })
    });


    describe('mudarStatus', () => {
        it('Deveria mudar status do template no banco', async () => {
            // Arrange
            const body: MudarStatusTemplateDto = {
                id: 1,
                status: StatusEnum.Ativo,
            };

            const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

            jest.spyOn(service, 'mudarStatus').mockResolvedValueOnce(undefined);

            // Act
            await controller.mudarStatus(body, res as any);

            // Assert
            expect(res.status).toHaveBeenCalledWith(201);
            expect(res.json).toHaveBeenCalledWith({ status: "success", message: "Status mudado com sucesso" });
            expect(service.mudarStatus).toHaveBeenCalledTimes(1);
        });

        it('Deveria lançar um erro se a mudança falhar', async () => {
            // Arrange
            const body: MudarStatusTemplateDto = {
                id: 1,
                status: StatusEnum.Ativo,
            };

            const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

            jest.spyOn(service, 'mudarStatus').mockRejectedValueOnce(new Error());

            // Act and Assert
            await expect(controller.mudarStatus(body, res as any)).rejects.toThrow(HttpException);
            expect(service.mudarStatus).toHaveBeenCalledTimes(1);
        })
    });


    describe('aprovar', () => {
        it('Deveria aprovar template no banco', async () => {
            // Arrange
            const id = 1;
            const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

            jest.spyOn(service, 'aprovar').mockResolvedValueOnce(undefined);

            // Act
            await controller.aprovar(id, res as any);

            // Assert
            expect(res.status).toHaveBeenCalledWith(201);
            expect(res.json).toHaveBeenCalledWith({ status: "success", message: "Template aprovado com sucesso" });
            expect(service.aprovar).toHaveBeenCalledTimes(1);
        });

        it('Deveria lançar um erro se a aprovação falhar', async () => {
            // Arrange
            const id = 1;
            const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

            jest.spyOn(service, 'aprovar').mockRejectedValueOnce(new Error());

            // Act and Assert
            await expect(controller.aprovar(id, res as any)).rejects.toThrow(HttpException);
            expect(service.aprovar).toHaveBeenCalledTimes(1);
        })
    });


    describe('remove', () => {
        it('Deveria remover template pendente do banco', async () => {
            // Arrange
            const id = 1;
            const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

            jest.spyOn(service, 'remove').mockResolvedValueOnce(undefined);

            // Act
            await controller.remove(id, res as any);

            // Assert
            expect(res.status).toHaveBeenCalledWith(201);
            expect(res.json).toHaveBeenCalledWith({ status: "success", message: "Template excluido com sucesso" });
            expect(service.remove).toHaveBeenCalledTimes(1);
        });

        it('Deveria lançar um erro se a remoção falhar', async () => {
            // Arrange
            const id = 1;
            const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

            jest.spyOn(service, 'remove').mockRejectedValueOnce(new Error());

            // Act and Assert
            await expect(controller.remove(id, res as any)).rejects.toThrow(HttpException);
            expect(service.remove).toHaveBeenCalledTimes(1);
        })
    });


    describe('pendente', () => {
        it('Deveria retornar todos os template pendente do banco', async () => {
            // Arrange
            const mockTemplate = [{
                titulo: 'Template Title',
                descricao: 'Template Description',
                status: StatusEnum.Ativo,
                campos: [{} as any],
                quantidadeCampos: 2,
                id: 123,
                dataCriacao: new Date(),
                formato: 'CSV',
                usuario: { nome: 'nome', matricula: '123' },
                arquivos: []
            }];

            const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

            jest.spyOn(service, 'pendente').mockResolvedValueOnce(mockTemplate);

            // Act
            await controller.pendente(res as any);

            // Assert
            expect(res.status).toHaveBeenCalledWith(201);
            expect(res.json).toHaveBeenCalledWith({ status: 'success', message: 'Templates encontrados com sucesso', templates: mockTemplate });
            expect(service.pendente).toHaveBeenCalledTimes(1);
        });

        it('Deveria lançar um erro se a requisição de pendentes falhar', async () => {
            // Arrange
            const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

            jest.spyOn(service, 'pendente').mockRejectedValueOnce(new Error());

            // Act and Assert
            await expect(controller.pendente(res as any)).rejects.toThrow(HttpException);
            expect(service.pendente).toHaveBeenCalledTimes(1);
        })
    });


    describe('findAll', () => {
        it('Deveria retornar todos os templates do banco', async () => {
            // Arrange
            const mockTemplates = [
                {
                    ...templatesPuroMock,
                    "usuario": {
                        "nome": "Vanessa",
                        "matricula": "312",
                        "verificado": true,
                        "perfil": PerfilEnum.Gerente,
                    },
                    "formato": "XLSX",
                }
            ];

            const res = { status: jest.fn().mockReturnThis(), json: jest.fn(), templates: jest.fn().mockResolvedValueOnce(mockTemplates) };

            jest.spyOn(service, 'findAll').mockResolvedValueOnce(mockTemplates);

            // Act
            await controller.findAll(res as any);

            // Assert
            expect(res.status).toHaveBeenCalledWith(201);
            expect(res.json).toHaveBeenCalledWith({ status: 'success', message: 'Templates encontrados com sucesso', templates: mockTemplates });
            expect(service.findAll).toHaveBeenCalledTimes(1);
        });

        it('Deveria lançar um erro se a requisição de templates falhar', async () => {
            // Arrange
            const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

            jest.spyOn(service, 'findAll').mockRejectedValueOnce(new Error());

            // Act and Assert
            await expect(controller.findAll(res as any)).rejects.toThrow(HttpException);
            expect(service.findAll).toHaveBeenCalledTimes(1);
        })
    });


    describe('findOne', () => {
        it('Deveria retornar o template do banco', async () => {
            // Arrange
            const id = 1;
            const res = { status: jest.fn().mockReturnThis(), json: jest.fn(), templates: jest.fn().mockResolvedValueOnce(formattedTemplatesPuroMock) };

            jest.spyOn(service, 'findOne').mockResolvedValueOnce(formattedTemplatesPuroMock);

            // Act
            await controller.findOne(id, res as any);

            // Assert
            expect(res.status).toHaveBeenCalledWith(201);
            expect(res.json).toHaveBeenCalledWith({ status: 'success', message: 'Template encontrado com sucesso', template: formattedTemplatesPuroMock });
            expect(service.findOne).toHaveBeenCalledTimes(1);
        });

        it('Deveria lançar um erro se a requisição de template falhar', async () => {
            // Arrange
            const id = 1;
            const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

            jest.spyOn(service, 'findOne').mockRejectedValueOnce(new Error());

            // Act and Assert
            await expect(controller.findOne(id, res as any)).rejects.toThrow(HttpException);
            expect(service.findOne).toHaveBeenCalledTimes(1);
        })
    });
});
