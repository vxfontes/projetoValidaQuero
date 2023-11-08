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
import { FindOneTemplateDto } from './dto/find-one-template.dto';

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

        if (!Object.values(StatusEnum).includes(status)) throw new Error('Status inválido');

        const template = await this.TemplateRepository.findOneBy({ id });

        if (template) {
            template.status = status;
            this.TemplateRepository.save(template);
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


    async findAll() {
        let formattedTemplates = [];
        const templates = await this.TemplateRepository.find({
            relations: ['usuario', 'formato', 'arquivos'],
            select: ['id', 'titulo', 'campos', 'dataCriacao', 'formato', 'quantidadeCampos', 'status', 'descricao', 'usuario', 'arquivos']
        });

        if (templates) {
            formattedTemplates = templates.map(template => ({
                ...template,
                status: template.status,
                usuario: {
                    nome: template.usuario.nome,
                    matricula: template.usuario.matricula,
                    verificado: template.usuario.verificado,
                    perfil: template.usuario.perfil,
                },
                formato: template.formato.titulo,
            }))
        }

        return formattedTemplates;
    }


    async findOne(id: number) {
        const template = await this.TemplateRepository.findOne({
            where: { id: id },
            relations: ['usuario', 'formato', 'arquivos', 'arquivos.usuario'],
            select: ['id', 'titulo', 'campos', 'dataCriacao', 'formato', 'quantidadeCampos', 'status', 'descricao', 'usuario', 'arquivos']
        });

        if (!template) throw new Error('Template não encontrado');

        const formattedTemplate: FindOneTemplateDto = {
            ...template,
            formato: template.formato.titulo,
            usuario: {
                nome: template.usuario.nome,
                matricula: template.usuario.matricula,
            },
            arquivos: template.arquivos.map(arq => ({
                id: arq.id,
                titulo: arq.titulo,
                dataCriacao: arq.dataCriacao,
                linhas: arq.linhas,
                aprovado: arq.aprovado,
                url: arq.url,
                usuario: { nome: arq.usuario.nome, matricula: arq.usuario.matricula },
                template: { titulo: template.titulo }
            }))
        }

        return formattedTemplate;
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


    async pendente() {
        const templates = await this.TemplateRepository.find({
            relations: ["usuario", "formato"],
            where: { status: StatusEnum.Pendente }
        });

        const formattedTemplates = templates.map(template => ({
            ...template,
            usuario: {
                nome: template.usuario.nome,
                matricula: template.usuario.matricula,
            },
            formato: template.formato.titulo
        }));

        return formattedTemplates;
    }
}