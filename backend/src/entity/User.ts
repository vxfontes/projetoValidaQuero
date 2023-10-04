import { Entity, Column, OneToMany, PrimaryColumn } from "typeorm";
import { Template } from "./Template";
import { Arquivo } from "./Arquivo";
import { PerfilEnum } from "./Perfil";

@Entity({ schema: "ValidaQuero" })
export class Usuario {
    @Column({ type: 'varchar', nullable: false })
    nome: string;

    @PrimaryColumn({ type: 'varchar', unique: true, nullable: false })
    matricula: string;

    @Column({ type: 'varchar', nullable: false })
    senha: string;

    @Column({ type: 'enum', enum: PerfilEnum, nullable: false })
    perfil: PerfilEnum;

    @Column({ type: 'boolean', nullable: false })
    verificado: boolean;

    @OneToMany(() => Arquivo, (arquivo) => arquivo.usuario)
    arquivo: Arquivo[];

    @OneToMany(() => Template, (template) => template.usuario)
    template: Template[];
}
