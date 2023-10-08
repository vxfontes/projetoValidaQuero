import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1696775359211 implements MigrationInterface {
    name = 'Default1696775359211'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ValidaQuero"."template" RENAME COLUMN "status" TO "statuss"`);
        await queryRunner.query(`ALTER TYPE "ValidaQuero"."template_status_enum" RENAME TO "template_statuss_enum"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TYPE "ValidaQuero"."template_statuss_enum" RENAME TO "template_status_enum"`);
        await queryRunner.query(`ALTER TABLE "ValidaQuero"."template" RENAME COLUMN "statuss" TO "status"`);
    }

}
