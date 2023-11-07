import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './app/user/user.module';
import { FormatoModule } from './app/formato/formato.module';
import { TemplateModule } from './app/template/template.module';

// isso é um decorator
@Module({
    imports: [DatabaseModule, UserModule, FormatoModule, TemplateModule],
    controllers: [], // são os arquivos que recebem rota
    providers: [], // tudo que não é controller, é provider
})
export class AppModule { }