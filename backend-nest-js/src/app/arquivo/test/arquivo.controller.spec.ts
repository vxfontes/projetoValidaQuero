import { Test, TestingModule } from '@nestjs/testing';
import { ArquivoController } from '../arquivo.controller';
import { ArquivoService } from '../arquivo.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { HttpException } from '@nestjs/common';
import { Arquivo } from '../entities/arquivo.entity';

describe('ArquivoController', () => {
    let controller: ArquivoController;
    let service: ArquivoService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [ArquivoController],
            providers: [
                ArquivoService,
                {
                    provide: getRepositoryToken(Arquivo),
                    useValue: {}
                },
            ],
        }).compile();

        controller = module.get<ArquivoController>(ArquivoController);
        service = module.get<ArquivoService>(ArquivoService);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
        expect(service).toBeDefined();
    });

    describe('findAll', () => {
        it('Deveria retornar arquivos aprovados do banco', async () => {
            // Arrange
            const arquivo = {
                id: 1,
                titulo: 'Teste',
                dataCriacao: new Date(),
                linhas: 10,
                aprovado: true,
                url: 'http://example.com',
                usuario: {
                    nome: 'Teste',
                    matricula: '123456',
                },
                template: {
                    titulo: 'Teste',
                    formato: {
                        titulo: 'Teste',
                    },
                },
            };

            jest.spyOn(service, 'findAll').mockResolvedValue([arquivo]);
            const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

            // Act
            await controller.findAll(res as any);

            // Assert
            expect(res.status).toHaveBeenCalledWith(201);
            expect(res.json).toHaveBeenCalledWith({ status: 'success', message: 'Arquivos encontrados com sucesso', arquivos: [arquivo] });
            expect(service.findAll).toHaveBeenCalledTimes(1);
        });

        it('Deveria lançar um erro se o find falhar', async () => {
            // Arrange
            const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

            jest.spyOn(service, 'findAll').mockRejectedValueOnce(new Error());

            // Act and Assert
            await expect(controller.findAll(res as any)).rejects.toThrow(HttpException);
            expect(service.findAll).toHaveBeenCalledTimes(1);
        })
    });
});