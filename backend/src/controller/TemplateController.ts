import { Request, Response } from "express";
import { StatusEnum } from "../entity/Status";
import { Template } from "../entity/Template";
import { formatoRepository, templateRepository, userRepository } from "../configs/repository";
import { PerfilEnum } from "../entity/Perfil";

export class TemplateController {

    /**
     * 
     * @param request json com: titulo, descricao, quantidadeCampos, status, campos, formato, usuario
     * @param response resposta se foi criado ou não
     */
    async create(request: Request, response: Response) {
        try {
            const { titulo, descricao, status, campos, formato, usuario } = request.body;
            const quantidadeCampos = campos.length

            // Verifique se todos os campos obrigatórios estão presentes
            if (!titulo || !descricao || !status || !campos || !formato || !usuario) {
                throw new Error("Todos os campos são obrigatórios.");
            }

            // Verificar se o status fornecido é válido
            if (!Object.values(StatusEnum).includes(status)) throw new Error('Status inválido');

            const statusExistente = await formatoRepository.findOneBy({ id: formato });
            if (!statusExistente) throw new Error('Formato não encontrado no banco de dados');

            const usuarioExistente = await userRepository.findOneBy({ matricula: usuario });
            if (!usuarioExistente) throw new Error('Usuário não encontrado no banco de dados');
            if (usuarioExistente.perfil === PerfilEnum.Time) throw new Error("Usuários do time não podem fazer criação de templates");
            if (!usuarioExistente.verificado) throw new Error("Usuários não verificados não podem fazer upload de arquivos");

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
     * aprovar um template
     * @param request id 
     * @param response resposta se foi aprovado ou não
     */
    async aprovar(request: Request, response: Response) {
        try {
            const id = parseInt(request.params.id)

            // Verifique se todos os campos obrigatórios estão presentes
            if (!id) throw new Error("ID é obrigatório.");

            const template = await templateRepository.findOneBy({ id })

            if (template) {
                template.status = StatusEnum.Ativo

                await templateRepository.save(template);
                response.status(201).json({ status: "success", message: "Template aprovado com sucesso", template: template });
            } else {
                throw new Error('Template não encontrado');
            }

        } catch (error) {
            response.status(500).json({ status: "error", message: error.message, error: error });
        }
    }


    /**
     * dasativar um template
     * @param request id 
     * @param response resposta se foi desativado ou não
     */
    async mudarStatus(request: Request, response: Response) {
        try {
            const { id, status } = request.body;

            if (!Object.values(StatusEnum).includes(status)) throw new Error('Status inválido');

            const template = await templateRepository.findOneBy({ id })

            if (template) {
                template.status = status

                await templateRepository.save(template);
                response.status(201).json({ status: "success", message: "Status mudado com sucesso com sucesso", template: template });
            } else {
                throw new Error('Template não encontrado');
            }

        } catch (error) {
            response.status(500).json({ status: "error", message: error.message, error: error });
        }
    }


    /**
     * excluir template pendente
     * @param request id 
     * @param response resposta se foi excluido ou não
     */
    async excluir(request: Request, response: Response) {
        try {
            const id = parseInt(request.params.id)

            // Verifique se todos os campos obrigatórios estão presentes
            if (!id) {
                throw new Error("ID é obrigatório.");
            }

            const template = await templateRepository.findOneBy({ id })

            if (template) {
                if (template.status === StatusEnum.Pendente) await templateRepository.remove(template);
                else throw new Error('Template não pode ser excluido pois não é pendente');
                response.status(201).json({ status: "success", message: "Template excluido com sucesso" });
            } else {
                throw new Error('Template não encontrado');
            }

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
            response.status(500).json({ status: 'error', message: 'Erro ao obter template', error: error });
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
                .leftJoinAndSelect("arquivos.usuario", "arquivo_usuario")
                .leftJoinAndSelect("arquivos.template", "arquivo_template")
                .where("template.id = :id", { id: templateId })
                .select([
                    "template",
                    "usuario.nome",
                    "usuario.matricula",
                    "usuario.perfil",
                    "usuario.verificado",
                    "formato.titulo",
                    "arquivos",
                    "arquivo_usuario.nome",
                    "arquivo_usuario.matricula",
                    "arquivo_template.titulo",
                ])
                .getOne();

            if (!template) return response.status(404).json({ status: 'error', message: 'Template não encontrado' });

            const formattedTemplate = {
                ...template,
                formato: template.formato.titulo
            };

            response.status(200).json({ status: 'success', message: 'Template encontrado com sucesso', template: formattedTemplate });
        } catch (error) {
            response.status(500).json({ status: 'error', message: 'Erro ao obter o template', error: error });
        }
    }


    /**
     * 
     * @param response todos os templates do banco de dados
     */
    async pendentes(request: Request, response: Response) {
        try {
            const templates = await templateRepository
                .createQueryBuilder("template")
                .leftJoinAndSelect("template.usuario", "usuario")
                .leftJoinAndSelect("template.formato", "formato")
                .where('template.status = :status', { status: StatusEnum.Pendente })
                .select([
                    "template",
                    "usuario.nome",
                    "usuario.matricula",
                    "formato.titulo",
                ])
                .getMany();

            const formattedTemplates = templates.map(template => ({
                ...template,
                formato: template.formato.titulo
            }));

            response.status(201).json({ status: 'success', message: 'Templates encontrados com sucesso', templates: formattedTemplates });
        } catch (error) {
            response.status(500).json({ status: 'error', message: 'Erro ao obter template', error: error });
        }
    }


    /**
     * 
     * @param response formatos x quantidade de templates
     */
    async formatoQuant(request: Request, response: Response) {
        try {
            const resultado = await formatoRepository
                .createQueryBuilder('formato')
                .leftJoinAndSelect('formato.template', 'template')
                .select(['formato.titulo AS formato', 'COUNT(template.id) AS quantidade'])
                .groupBy('formato.id')
                .getRawMany();

            response.status(201).json({ status: 'success', message: 'Arquivos encontrados com sucesso', result: resultado });
        } catch (error) {
            response.status(500).json({ status: 'error', message: 'Erro ao obter arquivos por formato', error: error });
        }
    }
}
