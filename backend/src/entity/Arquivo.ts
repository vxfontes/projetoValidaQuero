import { Entity, Column, ManyToOne, JoinColumn } from "typeorm";
import { Template } from "./Template";
import { Usuario } from "./User";
import { Base } from "./Base";

@Entity({ schema: "ValidaQuero" })
export class Arquivo extends Base {
    @Column({ type: 'varchar', length: 30, nullable: false })
    titulo: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    dataCriacao: Date;

    @Column({ type: 'integer', nullable: false })
    linhas: number;

    @Column({ type: 'boolean', nullable: false })
    aprovado: boolean;

    @Column({ type: 'varchar', nullable: true })
    url: string;

    @ManyToOne(() => Usuario, { nullable: false })
    @JoinColumn({ name: 'usuario' })
    usuario: Usuario;
    
    @ManyToOne(() => Template, { nullable: false })
    @JoinColumn({ name: 'template' })
    template: Template;
}
