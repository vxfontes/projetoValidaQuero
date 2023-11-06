import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './app/user/user.module';

// isso é um decorator
@Module({
    imports: [DatabaseModule, UserModule],
    controllers: [AppController], // são os arquivos que recebem rota
    providers: [AppService], // tudo que não é controller, é provider
})
export class AppModule { }