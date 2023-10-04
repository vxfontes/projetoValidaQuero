import { Entity, Column, OneToMany } from 'typeorm';
import { Base } from './Base';
import { Template } from './Template';

@Entity({ schema: "ValidaQuero" })
export class Formato extends Base {
    @Column({ type: 'varchar', length: 4, nullable: false })
    titulo: string;

    @OneToMany(() => Template, (template) => template.formato)
    template: Template[];
}