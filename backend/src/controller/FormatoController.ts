import { Request, Response } from "express"
import { formatoRepository } from "../configs/repository";

export class FormatoController {

    /**
     * 
     * @param request 
     * @param response todos os formatos do sistema
     */
    async all(request: Request, response: Response) {
        try {
            const formatos = await formatoRepository.find();
            response.status(201).json({ status: 'success', message: 'Formatos encontrados com sucesso', formatos: formatos });
        } catch (error) {
            response.status(500).json({ status: 'error', message: 'Erro ao obter Formatos', error: error });
        }
    }

    /**
     * 
     * @param request formato
     * @param response informa se foi cadastrado
     */
    async create(request: Request, response: Response) {
        try {
            const { formato } = request.body;

            if (!formato) {
                throw new Error("Campo é obrigatório.");
            }

            const existingFormato = await formatoRepository.findOne({ where: formato });

            if (existingFormato) {
                throw new Error('Formato já existe no banco de dados');
            } else {
                await formatoRepository.save(formato);

                response.status(201).json({ status: 'success', message: 'Formato criado com sucesso' });
            }
        } catch (error) {
            response.status(500).json({ status: 'error', message: error.message, error: error });
        }
    }
}