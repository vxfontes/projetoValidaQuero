import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1696771911442 implements MigrationInterface {
    name = 'Default1696771911442'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ValidaQuero"."formato" RENAME COLUMN "tituloFormato" TO "titulo"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ValidaQuero"."formato" RENAME COLUMN "titulo" TO "tituloFormato"`);
    }

}
