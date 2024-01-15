import { Controller, Get, Post, Body, HttpException, HttpStatus, Res } from '@nestjs/common';
import { FormatoService } from './formato.service';
import { CreateFormatoDto } from './dto/create-formato.dto';
import { Response } from 'express';

@Controller('formato')
export class FormatoController {
    constructor(private readonly formatoService: FormatoService) { }

    @Post()
    async create(@Body() createFormatoDto: CreateFormatoDto, @Res() res: Response) {
        try {
            this.formatoService.create(createFormatoDto);
            res.status(HttpStatus.CREATED).json({ status: 'success', message: 'Formato criado com sucesso' });
        } catch (error) {
            throw new HttpException({
                status: 'error',
                message: error.message,
            }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Get()
    async findAll(@Res() res: Response) {
        try {
            const formatos = await this.formatoService.findAll();
            res.status(HttpStatus.CREATED).json({ status: 'success', message: 'Formatos encontrados com sucesso', formatos: formatos });
        } catch (error) {
            throw new HttpException({
                status: 'error',
                message: error.message,
            }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Get('/templates')
    async formatoQuantidade(@Res() res: Response) {
        try {
            const resultado = await this.formatoService.formatoQuantidade();
            res.status(HttpStatus.CREATED).json({ status: 'success', message: 'Arquivos encontrados com sucesso', result: resultado });
        } catch (error) {
            throw new HttpException({
                status: 'error',
                message: error.message,
            }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
