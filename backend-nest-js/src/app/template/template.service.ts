import { Injectable } from '@nestjs/common';
import { CreateTemplateDto } from './dto/create-template.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Template } from './entities/template.entity';
import { Formato } from '../formato/entities/formato.entity';
import { Repository } from 'typeorm';
import { User } from '../user/entities/user.entity';
import { StatusEnum } from './entities/status.entity';
import { PerfilEnum } from '../user/entities/perfil.entity';
import { MudarStatusTemplateDto } from './dto/mudar-status-template.dto';

@Injectable()
export class TemplateService {
    constructor(
        @InjectRepository(Template)
        private readonly TemplateRepository: Repository<Template>,
        @InjectRepository(Formato)
        private readonly FormatoRepository: Repository<Formato>,
        @InjectRepository(User)
        private readonly UserRepository: Repository<User>,
    ) { }


    async create(createTemplateDto: CreateTemplateDto) {
        const { titulo, descricao, status, campos, formato, usuario } = createTemplateDto;

        if (!titulo || !descricao || !status || !campos || !formato || !usuario) {
            throw new Error("Todos os campos são obrigatórios.");
        }

        // Verificar se o status fornecido é válido
        if (!Object.values(StatusEnum).includes(status)) throw new Error('Status inválido');

        const existingFormato = await this.FormatoRepository.findOne({ where: { id: formato } });
        if (!existingFormato) throw new Error('Formato não encontrado no banco de dados');

        const existingUser = await this.UserRepository.findOne({ where: { matricula: usuario } });
        if (!existingUser) throw new Error('Usuário não encontrado no banco de dados');
        if (existingUser.perfil === PerfilEnum.Time) throw new Error("Usuários do time não podem fazer criação de templates");
        if (!existingUser.verificado) throw new Error("Usuários não verificados não podem fazer upload de arquivos");

        const template = this.TemplateRepository.create({
            titulo: createTemplateDto.titulo,
            descricao: createTemplateDto.descricao,
            quantidadeCampos: createTemplateDto.campos.length,
            status: createTemplateDto.status,
            campos: createTemplateDto.campos,
            formato: existingFormato,
            usuario: existingUser
        });

        return this.TemplateRepository.save(template);
    }


    async mudarStatus(mudarStatus: MudarStatusTemplateDto) {
        const { id, status } = mudarStatus;

        if (!id || !status) throw new Error("Campos obrigatórios.");

        if (!Object.values(StatusEnum).includes(status)) throw new Error('Status inválido');

        const template = await this.TemplateRepository.findOneBy({ id });

        if (template) {
            template.status = status;
            this.TemplateRepository.update(id, template);
        } else throw new Error('Template não encontrado');
    }


    async aprovar(id: number) {
        if (!id) throw new Error("ID é obrigatório.");

        const template = await this.TemplateRepository.findOneBy({ id });

        if (template) {
            template.status = StatusEnum.Ativo;
            this.TemplateRepository.update(id, template);
        } else throw new Error('Template não encontrado');
    }


    findAll() {
        return `This action returns all template`;
    }

    findOne(id: number) {
        return `This action returns a #${id} template`;
    }

    async remove(id: number) {
        if (!id) throw new Error("ID é obrigatório.");
        
        const template = await this.TemplateRepository.findOneBy({ id })

        if (template) {
            if (template.status === StatusEnum.Pendente) await this.TemplateRepository.remove(template);
            else throw new Error('Template não pode ser excluido pois não é pendente');
        } else {
            throw new Error('Template não encontrado');
        }
    }
}
