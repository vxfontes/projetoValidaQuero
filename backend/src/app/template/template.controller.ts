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
                message: error.message,
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
                message: error.message,
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
                message: error.message,
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
                message: error.message,
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
                message: 'Erro ao obter templates pendentes',
            }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @Get()
    async findAll(@Res() res: Response) {
        try {
            const templates = await this.templateService.findAll();
            res.status(HttpStatus.CREATED).json({ status: 'success', message: 'Templates encontrados com sucesso', templates: templates });
        } catch (error) {
            throw new HttpException({
                status: 'error',
                message: 'Erro ao obter templates',
            }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @Get(':id')
    async findOne(@Param('id') id: number, @Res() res: Response) {
        try {
            const template = await this.templateService.findOne(+id);
            res.status(HttpStatus.CREATED).json({ status: 'success', message: 'Template encontrado com sucesso', template: template });
        } catch (error) {
            throw new HttpException({
                status: 'error',
                message: error.message,
            }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
