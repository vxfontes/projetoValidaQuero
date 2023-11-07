import { Test, TestingModule } from '@nestjs/testing';
import { ArquivoController } from '../arquivo.controller';
import { ArquivoService } from '../arquivo.service';
import { getRepositoryToken } from '@nestjs/typeorm';
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
});
