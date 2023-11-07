import { Controller, Get, Res, HttpStatus, HttpException } from '@nestjs/common';
import { ArquivoService } from './arquivo.service';
import { Response } from 'express';

@Controller('arquivo')
export class ArquivoController {
    constructor(private readonly arquivoService: ArquivoService) { }

    @Get()
    async findAll(@Res() res: Response) {
        try {
            const arquivos = await this.arquivoService.findAll();
            res.status(HttpStatus.CREATED).json({ status: 'success', message: 'Arquivos encontrados com sucesso', arquivos: arquivos });
        } catch (error) {
            throw new HttpException({
                status: 'error',
                error: 'Erro ao obter arquivos',
            }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
