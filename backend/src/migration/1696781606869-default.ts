import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1696781606869 implements MigrationInterface {
    name = 'Default1696781606869'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ValidaQuero"."arquivo" RENAME COLUMN "linhas" TO "linha"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ValidaQuero"."arquivo" RENAME COLUMN "linha" TO "linhas"`);
    }

}
