import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Arquivo } from './entities/arquivo.entity';

@Injectable()
export class ArquivoService {
    constructor(
        @InjectRepository(Arquivo)
        private readonly ArquivoRepository: Repository<Arquivo>,
    ) { }

    async findAll() {
        const arquivos = await this.ArquivoRepository.find({
            where: { aprovado: true },
            relations: ["usuario", "template", "template.formato"],
            select: ["id", "titulo", "dataCriacao", "linhas", "aprovado", "url", "usuario", "template"]
        });

        let formattedArquivos = []

        if (arquivos) {
            formattedArquivos = arquivos.map(arquivo => ({
                ...arquivo,
                usuario: {
                    nome: arquivo.usuario.nome,
                    matricula: arquivo.usuario.matricula,
                },
                template: {
                    titulo: arquivo.template.titulo,
                },
                formato: arquivo.template.formato.titulo
            }));
        }

        return formattedArquivos;
    }

}
