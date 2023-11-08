import { Test, TestingModule } from '@nestjs/testing';
import { ArquivoService } from '../arquivo.service';
import { Repository } from 'typeorm';
import { Arquivo } from '../entities/arquivo.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('ArquivoService', () => {
    let service: ArquivoService;
    let arquivoRepository: Repository<Arquivo>;
    const mockRepository = {
        find: jest.fn(),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                ArquivoService,
                {
                    provide: getRepositoryToken(Arquivo),
                    useValue: {
                        find: jest.fn(),
                    }
                },
            ],
        }).compile();

        service = module.get<ArquivoService>(ArquivoService);
        arquivoRepository = module.get<Repository<Arquivo>>(getRepositoryToken(Arquivo));
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
        expect(arquivoRepository).toBeDefined();
    });


    describe('findAll', () => {
        it('Deveria retornar todos os arquivos aprovados', async () => {
            // Arrange
            const arquivo = {
                id: 1,
                titulo: 'Teste',
                dataCriacao: new Date(),
                linhas: 10,
                aprovado: true,
                url: 'http://example.com',
                usuario: { nome: 'Teste', matricula: '123456' },
                template: { titulo: 'Teste', formato: { titulo: 'Teste' } },
            };

            mockRepository.find.mockResolvedValue([arquivo]);

            // Act
            const result = await service.findAll();

            // Assert
            expect(result).toBeDefined();
            expect(arquivoRepository.find).toHaveBeenCalledTimes(1);
        });

        it('Deveria retornar um vetor vazio caso não existam arquivos aprovados', async () => {
            // Arrange
            mockRepository.find.mockResolvedValue([]);

            // Act
            const result = await service.findAll();

            // Assert
            expect(result).toEqual([]);
            expect(arquivoRepository.find).toHaveBeenCalledTimes(1);
        });
    });
});
