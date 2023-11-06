import { Injectable } from '@nestjs/common';
import { CreateFormatoDto } from './dto/create-formato.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Formato } from './entities/formato.entity';

@Injectable()
export class FormatoService {
    constructor(
        @InjectRepository(Formato) // adição de metodos para manipulação do banco de dados
        private readonly FormatoRepository: Repository<Formato>
    ) { }

    create(createFormatoDto: CreateFormatoDto) {
        return 'This action adds a new formato';
    }

    async findAll() {
        const formatos = await this.FormatoRepository.find();
        if (formatos.length === 0) throw new Error('Formatos não encontrados');

        return formatos;
    }
}
