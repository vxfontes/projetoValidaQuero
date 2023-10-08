import { Request, Response } from "express";
import { StatusEnum } from "../entity/Status";
import { Template } from "../entity/Template";
import { templateRepository } from "../configs/repository";

export class TemplateController {

    /**
     * 
     * @param request json com: titulo, descricao, quantidadeCampos, status, campos, formato, usuario
     * @param response resposta se foi criado ou não
     */
    async create(request: Request, response: Response) {
        try {
            const { titulo, descricao, quantidadeCampos, status, campos, formato, usuario } = request.body;

            // Verifique se todos os campos obrigatórios estão presentes
            if (!titulo || !descricao || !quantidadeCampos || !status || !campos || !formato || !usuario) {
                throw new Error("Todos os campos são obrigatórios.");
            }

            // Verificar se o status fornecido é válido
            if (!Object.values(StatusEnum).includes(status)) {
                throw new Error('Status inválido');
            }

            const template = Object.assign(new Template(), {
                titulo, descricao, quantidadeCampos, status, campos, formato, usuario
            });

            await templateRepository.save(template);

            response.status(201).json({ status: "success", message: "Template criado com sucesso" });
        } catch (error) {
            response.status(500).json({ status: "error", message: error.message, error: error });
        }
    }


    /**
     * 
     * @param response todos os templates do banco de dados
     */
    async all(request: Request, response: Response) {
        try {
            const templates = await templateRepository
                .createQueryBuilder("template")
                .leftJoinAndSelect("template.usuario", "usuario")
                .leftJoinAndSelect("template.formato", "formato")
                .leftJoinAndSelect("template.arquivos", "arquivos")
                .select([
                    "template",
                    "usuario.nome",
                    "usuario.matricula",
                    "usuario.perfil",
                    "usuario.verificado",
                    "formato.titulo",
                    "arquivos"
                ])
                .getMany();

            const formattedTemplates = templates.map(template => ({
                ...template,
                formato: template.formato.titulo
            }));

            response.status(201).json({ status: 'success', message: 'Templates encontrados com sucesso', templates: formattedTemplates });
        } catch (error) {
            response.status(500).json({ status: 'error', message: 'Erro ao obter usuários', error: error });
        }
    }


    /**
     * @param request envio do id do template
     * @param response O template correspondente ao ID.
     */
    async one(request: Request, response: Response) {
        try {
            const templateId = parseInt(request.params.id); // Supondo que você recebe o ID como parâmetro na rota

            const template = await templateRepository
                .createQueryBuilder("template")
                .leftJoinAndSelect("template.usuario", "usuario")
                .leftJoinAndSelect("template.formato", "formato")
                .leftJoinAndSelect("template.arquivos", "arquivos")
                .where("template.id = :id", { id: templateId })
                .select([
                    "template",
                    "usuario.nome",
                    "usuario.matricula",
                    "usuario.perfil",
                    "usuario.verificado",
                    "formato.titulo",
                    "arquivos"
                ])
                .getOne();

            if (!template) {
                response.status(404).json({ status: 'error', message: 'Template não encontrado' });
                return;
            }

            const formattedTemplate = {
                ...template,
                formato: template.formato.titulo
            };

            response.status(200).json({ status: 'success', message: 'Template encontrado com sucesso', template: formattedTemplate });
        } catch (error) {
            response.status(500).json({ status: 'error', message: 'Erro ao obter o template', error: error });
        }
    }

}
