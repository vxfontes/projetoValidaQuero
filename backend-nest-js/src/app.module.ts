import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

// isso é um decorator
@Module({
    imports: [
        ConfigModule.forRoot(),
        TypeOrmModule.forRoot({ // configurações de root
            type: 'postgres',
            database: 'postgres',
            username: 'postgres',
            password: 'postgres',
            schema: 'ValidaQueroNestJs'
        })
    ],
    controllers: [AppController], // são os arquivos que recebem rota
    providers: [AppService], // tudo que não é controller, é provider
})
export class AppModule { }