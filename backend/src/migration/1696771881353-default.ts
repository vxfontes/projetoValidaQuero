import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1696771881353 implements MigrationInterface {
    name = 'Default1696771881353'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ValidaQuero"."formato" RENAME COLUMN "titulo" TO "tituloFormato"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ValidaQuero"."formato" RENAME COLUMN "tituloFormato" TO "titulo"`);
    }

}
