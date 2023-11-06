import { Base } from '../../entity/Base';
import { Entity, Column } from 'typeorm';

@Entity({ name: 'formato', schema: "ValidaQueroNestJs" })
export class Formato extends Base {
    @Column({ type: 'varchar', length: 4, nullable: false })
    titulo: string;

    // @OneToMany(() => Template, (template) => template.formato, { cascade: true })
    // template: Template[];
}