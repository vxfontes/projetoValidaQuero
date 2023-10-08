import { Entity, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { Base } from "./Base";
import { Usuario } from "./User";
import { StatusEnum } from "./Status";
import { Formato } from "./Formato";
import { Arquivo } from "./Arquivo";

@Entity({ schema: "ValidaQuero" })
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

    // @ManyToOne(() => Formato, (formato) => formato.template) -> se, o joincolumn
    @ManyToOne(() => Formato)
    @JoinColumn({ name: 'formato' })
    formato: Formato;

    @ManyToOne(() => Usuario)
    @JoinColumn({ name: 'usuario' })
    usuario: Usuario;
}