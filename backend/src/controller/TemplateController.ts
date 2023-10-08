import { Request, Response } from "express";
import { StatusEnum } from "../entity/Status";
import { Template } from "../entity/Template";
import { templateRepository } from "../configs/repository";

export class TemplateController {
    async create(request: Request, response: Response) {
        try {
            const { titulo, descricao, quantidadeCampos, status, campos, formato, usuario } = request.body;

            // Verifique se todos os campos obrigatórios estão presentes
            if (!titulo || !descricao || !quantidadeCampos || !status || !campos || !formato || !usuario ) {
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
}
