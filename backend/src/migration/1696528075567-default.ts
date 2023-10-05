import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1696528075567 implements MigrationInterface {
    name = 'Default1696528075567'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ValidaQuero"."usuario" RENAME COLUMN "senha" TO "senhas"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ValidaQuero"."usuario" RENAME COLUMN "senhas" TO "senha"`);
    }

}
