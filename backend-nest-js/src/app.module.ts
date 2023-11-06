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
            host: 'localhost',
            port: 5432,
            database: 'postgres',
            username: 'postgres',
            password: 'postgres',
            schema: 'ValidaQueroNestJs',
            synchronize: true,
            entities: [__dirname + '/**/*.entity{.js,.ts}'], // buscando todas as entidades ao inves de selecionar individualmente
        })
    ],
    controllers: [AppController], // são os arquivos que recebem rota
    providers: [AppService], // tudo que não é controller, é provider
})
export class AppModule { }