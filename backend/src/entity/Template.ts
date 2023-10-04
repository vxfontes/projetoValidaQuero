import { Entity, Column, ManyToOne, JoinColumn } from "typeorm";
import { Base } from "./Base";
import { Usuario } from "./User";
import { StatusEnum } from "./Status";
import { Formato } from "./Formato";

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

    // @ManyToOne(() => Formato, (formato) => formato.template) -> se, o joincolumn
    @ManyToOne(() => Formato)
    @JoinColumn({ name: 'formato' })
    formato: Formato;

    @ManyToOne(() => Usuario)
    @JoinColumn({ name: 'usuario' })
    usuario: Usuario;
}