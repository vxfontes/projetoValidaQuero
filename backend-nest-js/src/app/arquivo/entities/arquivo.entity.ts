import { Base } from "../../entity/base.entity";
import { Template } from "../../template/entities/template.entity";
import { User } from "../../user/entities/user.entity";
import { Entity, Column, ManyToOne, JoinColumn } from "typeorm";

@Entity({ name: 'arquivo', schema: "ValidaQueroNestJs" })
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

    @ManyToOne(() => User, { nullable: false })
    @JoinColumn({ name: 'usuario' })
    usuario: User;

    @ManyToOne(() => Template, { nullable: false })
    @JoinColumn({ name: 'template' })
    template: Template;
}
