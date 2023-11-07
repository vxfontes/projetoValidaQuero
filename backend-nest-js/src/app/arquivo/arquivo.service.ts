import { Injectable } from '@nestjs/common';
import { CreateArquivoDto } from './dto/create-arquivo.dto';
import { UpdateArquivoDto } from './dto/update-arquivo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Arquivo } from './entities/arquivo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ArquivoService {
    constructor(
        @InjectRepository(Arquivo)
        private readonly TemplateRepository: Repository<Arquivo>,
    ) { }

    create(createArquivoDto: CreateArquivoDto) {
        return 'This action adds a new arquivo';
    }

    findAll() {
        return `This action returns all arquivo`;
    }

    findOne(id: number) {
        return `This action returns a #${id} arquivo`;
    }

    update(id: number, updateArquivoDto: UpdateArquivoDto) {
        return `This action updates a #${id} arquivo`;
    }

    remove(id: number) {
        return `This action removes a #${id} arquivo`;
    }
}
