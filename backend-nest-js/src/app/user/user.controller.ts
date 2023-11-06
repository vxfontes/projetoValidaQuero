import { Controller, Get, Post, Body, Param, Delete, Res, HttpStatus, HttpException } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { Response } from 'express';
import { AuthUserDto } from './dto/auth-user.dto';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post()
    async create(@Body() user: CreateUserDto, @Res() res: Response) {
        try {
            const createdUser = await this.userService.create(user);
            res.status(HttpStatus.CREATED).json({ status: 'success', message: 'Usuário criado com sucesso', usuario: createdUser });
        } catch (error) {
            throw new HttpException({
                status: 'error',
                error: error.message,
            }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }



    @Get()
    findAll() {
        return this.userService.findAll();
    }


    @Get(':matricula')
    findOne(@Param('matricula') matricula: string) {
        return this.userService.findOne(matricula);
    }


    @Post('login')
    async auth(@Body() user: AuthUserDto, @Res() res: Response) {
        try {
            const authUser = await this.userService.auth(user);
            res.status(HttpStatus.CREATED).json({ status: 'success', message: 'Login efetuado com sucesso', usuario: authUser });
        } catch (error) {
            throw new HttpException({
                status: 'error',
                error: error.message,
            }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @Get('verify/:matricula')
    async verify(@Param('matricula') matricula: string, @Res() res: Response) {
        try {
            await this.userService.verify(matricula);
            res.status(HttpStatus.CREATED).json({ status: 'success', message: 'Usuário verificado com sucesso' });
        } catch (error) {
            throw new HttpException({
                status: 'error',
                error: error.message,
            }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @Get('pendentes')
    async pendente(@Res() res: Response) {
        try {
            const usuarios = await this.userService.pendente();
            res.status(HttpStatus.CREATED).json({ status: 'success', message: 'Usuários encontrados com sucesso', usuarios: usuarios });
        } catch (error) {
            throw new HttpException({
                status: 'error',
                error: error.message,
            }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @Delete(':matricula')
    async remove(@Param('matricula') matricula: string, @Res() res: Response) {
        try {
            await this.userService.remove(matricula);
            res.status(HttpStatus.CREATED).json({ status: 'success', message: `Usuário de matrícula: ${matricula} deletado com sucesso` });
        } catch (error) {
            throw new HttpException({
                status: 'error',
                error: error.message,
            }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
