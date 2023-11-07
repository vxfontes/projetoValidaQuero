import { Controller, Get, Post, Body, Param, Delete, Res, HttpException, HttpStatus } from '@nestjs/common';
import { TemplateService } from './template.service';
import { CreateTemplateDto } from './dto/create-template.dto';
import { Response } from 'express';
import { MudarStatusTemplateDto } from './dto/mudar-status-template.dto';

@Controller('template')
export class TemplateController {
    constructor(private readonly templateService: TemplateService) { }

    @Post()
    async create(@Body() createTemplateDto: CreateTemplateDto, @Res() res: Response) {
        try {
            await this.templateService.create(createTemplateDto);
            res.status(HttpStatus.CREATED).json({ status: 'success', message: 'Template criado com sucesso' });
        } catch (error) {
            throw new HttpException({
                status: 'error',
                error: error.message,
            }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @Get('aprovar/:id')
    async aprovar(@Param('id') id: number, @Res() res: Response) {
        try {
            await this.templateService.aprovar(id);
            res.status(HttpStatus.CREATED).json({ status: "success", message: "Template aprovado com sucesso" });
        } catch (error) {
            throw new HttpException({
                status: 'error',
                error: error.message,
            }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @Post('status')
    async mudarStatus(@Body() mudarStatusTemplateDto: MudarStatusTemplateDto, @Res() res: Response) {
        try {
            await this.templateService.mudarStatus(mudarStatusTemplateDto);
            res.status(HttpStatus.CREATED).json({ status: "success", message: "Status mudado com sucesso" });
        } catch (error) {
            throw new HttpException({
                status: 'error',
                error: error.message,
            }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @Delete(':id')
    async remove(@Param('id') id: number, @Res() res: Response) {
        try {
            await this.templateService.remove(+id);
            res.status(HttpStatus.CREATED).json({ status: "success", message: "Template excluido com sucesso" });
        } catch (error) {
            throw new HttpException({
                status: 'error',
                error: error.message,
            }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @Get('pendente')
    async pendente(@Res() res: Response) {
        try {
            const templates = await this.templateService.pendente();
            res.status(HttpStatus.CREATED).json({ status: 'success', message: 'Templates encontrados com sucesso', templates: templates });
        } catch (error) {
            throw new HttpException({
                status: 'error',
                error: 'Erro ao obter templates pendentes',
            }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @Get()
    findAll() {
        return this.templateService.findAll();
    }


    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.templateService.findOne(+id);
    }
}
