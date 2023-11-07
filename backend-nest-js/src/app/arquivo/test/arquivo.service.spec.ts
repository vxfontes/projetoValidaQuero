import { Test, TestingModule } from '@nestjs/testing';
import { ArquivoService } from '../arquivo.service';
import { Repository } from 'typeorm';
import { Arquivo } from '../entities/arquivo.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('ArquivoService', () => {
    let service: ArquivoService;
    let arquivoRepository: Repository<Arquivo>;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                ArquivoService,
                {
                    provide: getRepositoryToken(Arquivo),
                    useValue: {}
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
});
