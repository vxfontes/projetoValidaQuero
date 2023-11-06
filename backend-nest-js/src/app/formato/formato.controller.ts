import { Controller, Get, Post, Body, HttpException, HttpStatus, Res } from '@nestjs/common';
import { FormatoService } from './formato.service';
import { CreateFormatoDto } from './dto/create-formato.dto';
import { Response } from 'express';

@Controller('formato')
export class FormatoController {
    constructor(private readonly formatoService: FormatoService) { }

    @Post()
    create(@Body() createFormatoDto: CreateFormatoDto) {
        return this.formatoService.create(createFormatoDto);
    }

    @Get()
    async findAll(@Res() res: Response) {
        try {
            const formatos = await this.formatoService.findAll();
            res.status(HttpStatus.CREATED).json({ status: 'success', message: 'Formatos encontrados com sucesso', formatos: formatos });
        } catch (error) {
            throw new HttpException({
                status: 'error',
                error: error.message,
            }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
