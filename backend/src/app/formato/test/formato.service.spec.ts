import { Test, TestingModule } from '@nestjs/testing';
import { FormatoService } from '../formato.service';
import { Repository } from 'typeorm';
import { Formato } from '../entities/formato.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CreateFormatoDto } from '../dto/create-formato.dto';

describe('FormatoService', () => {
    let service: FormatoService;
    let repository: Repository<Formato>;
    let mockQueryBuilder;

    const formatoXquantidade = [
        { formato: 'PDF', quantidade: 10 },
        { formato: 'DOC', quantidade: 5 },
    ]

    beforeEach(async () => {
        mockQueryBuilder = {
            leftJoinAndSelect: jest.fn().mockReturnThis(),
            select: jest.fn().mockReturnThis(),
            groupBy: jest.fn().mockReturnThis(),
            getRawMany: jest.fn().mockResolvedValue([
                { formato: 'PDF', quantidade: 10 },
                { formato: 'DOC', quantidade: 5 },
            ]),
        };

        const module: TestingModule = await Test.createTestingModule({
            providers: [
                FormatoService,
                {
                    provide: getRepositoryToken(Formato),
                    useValue: {
                        findAll: jest.fn(),
                        findOne: jest.fn(),
                        save: jest.fn(),
                        find: jest.fn(),
                        createQueryBuilder: jest.fn(jest.fn(() => mockQueryBuilder)),
                    },
                }
            ],
        }).compile();

        service = module.get<FormatoService>(FormatoService);
        repository = module.get(getRepositoryToken(Formato));
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
        expect(repository).toBeDefined();
    });


    describe('findAll', () => {
        it('Deveria retornar todos os formatos', async () => {
            // Arrange
            const formatoEntityMock = [
                {
                    titulo: 'Titulo de teste',
                    id: 1,
                    template: []
                }
            ] as Formato[];

            jest.spyOn(repository, 'find').mockResolvedValue(formatoEntityMock);

            // Act
            const result = await service.findAll();

            // Assert
            expect(result).toBeDefined();
            expect(result).toEqual(formatoEntityMock);
            expect(repository.find).toHaveBeenCalledTimes(1);
        });

        it('Deveria retornar erro se não tiver formatos', async () => {
            // Arrange
            jest.spyOn(repository, 'find').mockResolvedValue([]);

            // Act & Assert
            await expect(service.findAll()).rejects.toThrow('Formatos não encontrados');
        });
    });


    describe('create', () => {
        it('Deveria criar um novo formato', async () => {
            // Arrange
            const formatoDtoMock: CreateFormatoDto = {
                titulo: 'Titulo de teste'
            };
            const formatoEntityMock = {
                ...formatoDtoMock,
                id: 1,
                template: [],
            } as Formato;

            jest.spyOn(repository, 'findOne').mockResolvedValue(undefined);
            jest.spyOn(repository, 'save').mockResolvedValue(formatoEntityMock);

            // Act
            const result = await service.create(formatoDtoMock);

            // Assert
            expect(result).toBeDefined();
            expect(result).toEqual(formatoEntityMock);
            expect(repository.findOne).toHaveBeenCalledTimes(1);
            expect(repository.save).toHaveBeenCalledTimes(1);
        });

        it('Deveria retornar erro se o formato já existir', async () => {
            // Arrange
            const formatoDtoMock = { titulo: 'Titulo de teste' };
            const formatoEntityMock = {
                ...formatoDtoMock,
                id: 1,
                template: [],
            } as Formato;

            jest.spyOn(repository, 'findOne').mockResolvedValue(formatoEntityMock);

            // Act & Assert
            await expect(service.create(formatoDtoMock)).rejects.toThrow('Formato já existe no banco de dados');
        });
    });


    describe('formatoQuantidade', () => {
        it('Deve retornar a quantidade de template x formatos disponíveis', async () => {
            // Arrange
            jest.spyOn(repository, 'createQueryBuilder');

            // Act && Assert
            const result = await service.formatoQuantidade();
            expect(result).toEqual(formatoXquantidade);
            expect(mockQueryBuilder.leftJoinAndSelect).toHaveBeenCalled();
            expect(mockQueryBuilder.select).toHaveBeenCalled();
            expect(mockQueryBuilder.groupBy).toHaveBeenCalled();
            expect(mockQueryBuilder.getRawMany).toHaveBeenCalled();
        });
    })
});
