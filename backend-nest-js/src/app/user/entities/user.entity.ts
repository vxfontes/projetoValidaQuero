import { Entity, Column, PrimaryColumn } from "typeorm";
import { PerfilEnum } from "./perfil.entity";

@Entity({ name: 'usuario', schema: "ValidaQueroNestJs" })
export class User {
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
}
