import { Entity, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { Base } from "../../entity/base.entity";
import { StatusEnum } from "./status.entity";
import { Formato } from "../../formato/entities/formato.entity";
import { User } from "../../user/entities/user.entity";
import { Arquivo } from "../../arquivo/entities/arquivo.entity";

@Entity({ name: 'template', schema: "ValidaQuero" })
export class Template extends Base {
    @Column({ type: 'varchar', nullable: false })
    titulo: string;

    @Column({ type: 'text', nullable: false })
    descricao: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    dataCriacao: Date;

    @Column({ type: 'integer', nullable: false })
    quantidadeCampos: number;

    @Column({ type: 'jsonb', nullable: false })
    campos: JSON[];

    @Column({ type: 'enum', enum: StatusEnum, nullable: false })
    status: StatusEnum;

    @OneToMany(() => Arquivo, (arquivo) => arquivo.template, { cascade: true })
    arquivos: Arquivo[];

    @ManyToOne(() => Formato, { nullable: false })
    @JoinColumn({ name: 'formato' })
    formato: Formato;

    @ManyToOne(() => User, { nullable: false })
    @JoinColumn({ name: 'usuario' })
    usuario: User;
}