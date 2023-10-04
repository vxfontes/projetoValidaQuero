import { Entity, Column, OneToMany } from "typeorm"
import { Base } from "./Base";
import { Template } from "./Template";
import { Arquivo } from "./Arquivo";

export enum PerfilEnum {
    Gestor = 'Gestor',
    Gerente = 'Gerente',
    Time = 'Time',
}

@Entity({ schema: "ValidaQuero" })
export class Usuario extends Base {
    @Column({ type: 'varchar', nullable: false })
    nome: string;

    @Column({ type: 'varchar', unique: true, nullable: false })
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
