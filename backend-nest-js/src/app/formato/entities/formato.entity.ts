import { Template } from '../../template/entities/template.entity';
import { Base } from '../../entity/base.entity';
import { Entity, Column, OneToMany } from 'typeorm';

@Entity({ name: 'formato', schema: "ValidaQueroNestJs" })
export class Formato extends Base {
    @Column({ type: 'varchar', length: 4, nullable: false })
    titulo: string;

    @OneToMany(() => Template, (template) => template.formato, { cascade: true })
    template: Template[];
}