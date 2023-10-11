import { Request, Response } from "express";
import { arquivoRepository, templateRepository, userRepository } from "../configs/repository";
import { PerfilEnum } from "../entity/Perfil";


export class UserPerfilController {

    /**
     * 
     * @param request matricula de usuario
     * @param response todos os templates do usuario especifico
     */
    async templates(request: Request, response: Response) {
        try {
            const matricula = request.params.matricula;
            
            const usuarioExistente = await userRepository.findOneBy({ matricula });

            if (!usuarioExistente) throw new Error('Usuário não encontrado no banco de dados');
            if (usuarioExistente.perfil === PerfilEnum.Time) throw new Error("Usuários do time não possuem templates");
            if (!usuarioExistente.verificado) throw new Error("Usuários não verificados não possuem templates");


            const templates = await templateRepository
                .createQueryBuilder("template")
                .leftJoinAndSelect("template.usuario", "usuario")
                .leftJoinAndSelect("template.formato", "formato")
                .where("usuario.matricula = :matricula", { matricula })
                .select([
                    "template",
                    "usuario.nome",
                    "usuario.matricula",
                    "usuario.perfil",
                    "usuario.verificado",
                    "formato.titulo"
                ])
                .getMany();


            if (templates.length === 0) throw new Error('Usuário não possui templates');

            const formattedTemplates = templates.map(template => ({
                ...template,
                formato: template.formato.titulo
            }));

            response.status(201).json({ status: 'success', message: `Templates de ${usuarioExistente.matricula} encontrados com sucesso`, templates: formattedTemplates });
        } catch (error) {
            response.status(500).json({ status: 'error', message: error.message, error: error });
        }
    }


    /**
     * 
     * @param request matricula de usuario
     * @param response todos os arquivos do usuario especifico
    */
    async arquivos(request: Request, response: Response) {
        const matricula = request.params.matricula;

        try {
            const usuarioExistente = await userRepository.findOneBy({ matricula });

            if (!usuarioExistente) throw new Error('Usuário não encontrado no banco de dados');
            if (usuarioExistente.perfil === PerfilEnum.Gerente) throw new Error("Gerentes não possuem arquivos");
            if (!usuarioExistente.verificado) throw new Error("Usuários não verificados não possuem arquivos");

            const arquivos = await arquivoRepository
                .createQueryBuilder("arquivo")
                .leftJoinAndSelect("arquivo.usuario", "usuario")
                .leftJoinAndSelect("arquivo.template", "template")
                .leftJoinAndSelect("template.formato", "formato")
                .where("usuario.matricula = :matricula", { matricula })
                .andWhere("arquivo.aprovado = :aprovado", { aprovado: true })
                .select([
                    "arquivo",
                    "usuario.nome",
                    "usuario.matricula",
                    "template.titulo",
                    "formato.titulo",
                ])
                .getMany();
                
            if (arquivos.length === 0) throw new Error('Usuário não possui arquivos');

            const formattedArquivos = arquivos.map(arquivo => ({
                ...arquivo,
                formato: arquivo.template.formato.titulo
            }));

            response.status(201).json({ status: 'success', message: `Arquivos de ${usuarioExistente.matricula} encontrados com sucesso`, arquivos: formattedArquivos });
        } catch (error) {
            response.status(500).json({ status: 'error', message: error.message, error: error });
        }
    }
}