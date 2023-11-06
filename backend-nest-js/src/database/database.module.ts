import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { join } from 'path';
const directoryAbove = join(__dirname, '../'); // Obtém o diretório um nível acima do __dirname
const filePattern = join(directoryAbove, '**', '*.entity.{js,ts}');

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
            entities: [filePattern], // buscando todas as entidades ao inves de selecionar individualmente
        }),
    ]
})
export class DatabaseModule { }
