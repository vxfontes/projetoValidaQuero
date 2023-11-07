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

    async create(formato: CreateFormatoDto) {
        if (!formato) throw new Error("Campo é obrigatório");

        const existingFormato = await this.FormatoRepository.findOne({ where: { titulo: formato.titulo } });

        if (existingFormato) throw new Error('Formato já existe no banco de dados');
        else return this.FormatoRepository.save(formato);
    }

    async findAll() {
        const formatos = await this.FormatoRepository.find();
        if (formatos.length === 0) throw new Error('Formatos não encontrados');

        return formatos;
    }
}
