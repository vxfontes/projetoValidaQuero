import { Request, Response } from "express";
import { StatusEnum } from "../entity/Status";
import { arquivoRepository, templateRepository, userRepository } from "../configs/repository";
import { Arquivo } from "../entity/Arquivo";
import { PerfilEnum } from "../entity/Perfil";

export class ArquivoController {

    /**
     * 
     * @param request json com: titulo, linhas, aprovado, url, usuario, template
     * @param response resposta se foi salvo ou não no banco
     */
    async create(request: Request, response: Response) {
        try {
            const { titulo, linhas, aprovado, url, usuario, template } = request.body;
            let newURL = url;
            console.log(newURL);


            // Verifique se todos os campos obrigatórios estão presentes
            if (!titulo || !linhas || (aprovado === undefined || aprovado === null) || !usuario || !template) {
                throw new Error("Campos obrigatórios faltando");
            }

            const usuarioExistente = await userRepository.findOneBy({ matricula: usuario });
            if (!usuarioExistente) throw new Error('Usuário não encontrado no banco de dados');
            if (usuarioExistente.perfil === PerfilEnum.Gerente) throw new Error("Gerentes não podem fazer upload de arquivos");
            if (!usuarioExistente.verificado) throw new Error("Usuários não verificados não podem fazer upload de arquivos");

            const templateExistente = await templateRepository.findOneBy({ id: template });
            if (!templateExistente) throw new Error('Template não encontrado no banco de dados');
            if (templateExistente.status === StatusEnum.Pendente) throw new Error("Templates pendentes não podem receber arquivos");

            if (aprovado && !url) throw new Error('Arquivo aprovado precisa possuir URL válida');
            if (!aprovado) newURL = null;

            console.log(newURL);

            const arquivo = Object.assign(new Arquivo(), {
                titulo, linhas, aprovado, url: newURL, usuario, template
            });

            await arquivoRepository.save(arquivo);

            response.status(201).json({ status: "success", message: "Arquivo armazenado com sucesso" });
        } catch (error) {
            response.status(500).json({ status: "error", message: error.message, error: error });
        }
    }

    /**
     * 
     * @param response todos os arquivos
     */
    async all(request: Request, response: Response) {
        try {
            const arquivos = await arquivoRepository
                .createQueryBuilder("arquivo")
                .leftJoinAndSelect("arquivo.usuario", "usuario")
                .leftJoinAndSelect("arquivo.template", "template")
                .leftJoinAndSelect("template.formato", "formato")
                .where("arquivo.aprovado = :aprovado", { aprovado: true })
                .select([
                    "arquivo",
                    "usuario.nome",
                    "usuario.matricula",
                    "template.titulo",
                    "formato.titulo",
                ])
                .getMany();

            const formattedArquivos = arquivos.map(arquivo => ({
                ...arquivo,
                template: {
                    titulo: arquivo.template.titulo
                },
                formato: arquivo.template.formato.titulo
            }));

            response.status(201).json({ status: 'success', message: 'Arquivos encontrados com sucesso', arquivos: formattedArquivos });
        } catch (error) {
            response.status(500).json({ status: 'error', message: 'Erro ao obter arquivos', error: error });
        }
    }


    /**
     * @param request envio do id do arquivo
     * @param response O arquivo correspondente ao ID.
     */
    async one(request: Request, response: Response) {
        try {
            const arquivoID = parseInt(request.params.id); // Supondo que você recebe o ID como parâmetro na rota

            const arquivo = await arquivoRepository
                .createQueryBuilder("arquivo")
                .leftJoinAndSelect("arquivo.usuario", "usuario")
                .leftJoinAndSelect("arquivo.template", "template")
                .leftJoinAndSelect("template.formato", "formato")
                .where("arquivo.id = :id", { id: arquivoID })
                .select([
                    "arquivo",
                    "usuario.nome",
                    "usuario.matricula",
                    "template.titulo",
                    "formato.titulo",
                ])
                .getOne();

            if (!arquivo) return response.status(404).json({ status: 'error', message: 'Arquivo não encontrado' });

            const formattedArquivo = {
                ...arquivo,
                formato: arquivo.template.formato.titulo
            }

            response.status(200).json({ status: 'success', message: 'Template encontrado com sucesso', template: formattedArquivo });
        } catch (error) {
            response.status(500).json({ status: 'error', message: 'Erro ao obter o arquivo', error: error });
        }
    }
}