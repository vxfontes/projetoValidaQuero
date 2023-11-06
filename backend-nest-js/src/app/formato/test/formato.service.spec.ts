import { Test, TestingModule } from '@nestjs/testing';
import { FormatoService } from '../formato.service';
import { Repository } from 'typeorm';
import { Formato } from '../entities/formato.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('FormatoService', () => {
    let service: FormatoService;
    let repository: Repository<Formato>;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                FormatoService,
                {
                    provide: getRepositoryToken(Formato),
                    useValue: {
                        findAll: jest.fn(),
                        find: jest.fn()
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
    })
});
