import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Arquivo } from '../arquivo/entities/arquivo.entity';
import { Template } from '../template/entities/template.entity';

@Module({
    imports: [TypeOrmModule.forFeature([User, Arquivo, Template])],
    controllers: [UserController],
    providers: [UserService],
})
export class UserModule { }
