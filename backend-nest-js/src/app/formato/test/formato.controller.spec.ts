import { Test, TestingModule } from '@nestjs/testing';
import { FormatoController } from '../formato.controller';
import { HttpException } from '@nestjs/common';
import { FormatoService } from '../formato.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Formato } from '../entities/formato.entity';

describe('FormatoController', () => {
    let controller: FormatoController;
    let service: FormatoService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [FormatoController],
            providers: [
                FormatoService,
                {
                    provide: getRepositoryToken(Formato),
                    useValue: {},
                }
            ],
        }).compile();

        controller = module.get<FormatoController>(FormatoController);
        service = module.get<FormatoService>(FormatoService);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
        expect(service).toBeDefined();
    });


    describe('findAll', () => {
        it('Deveria retornar todos os formatos', async () => {
            // Arrange
            const formatoEntityMock = [
                {
                    id: 1,
                    titulo: 'Titulo de teste',
                }
            ] as Formato[];
            const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

            jest.spyOn(service, "findAll").mockImplementation(() => Promise.resolve(formatoEntityMock));

            // Act
            await controller.findAll(res as any)

            // Assert
            expect(res.status).toHaveBeenCalledWith(201);
            expect(res.json).toHaveBeenCalledWith({ status: 'success', message: 'Formatos encontrados com sucesso', formatos: formatoEntityMock });
            expect(service.findAll).toHaveBeenCalledTimes(1);
        });

        it('Deveria lançar um erro se a não tiver formatos', async () => {
            // Arrange
            const res = { status: jest.fn().mockReturnThis(), json: jest.fn() }; // mock do objeto de resposta

            jest.spyOn(service, 'findAll').mockRejectedValueOnce(new Error())

            // Act and Assert
            await expect(controller.findAll(res as any)).rejects.toThrow(HttpException);
            expect(service.findAll).toHaveBeenCalledTimes(1);
        });
    });
});
