import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1696433592052 implements MigrationInterface {
    name = 'Default1696433592052'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ValidaQuero"."arquivo" ADD "usuario" integer`);
        await queryRunner.query(`ALTER TABLE "ValidaQuero"."arquivo" ADD "template" integer`);
        await queryRunner.query(`ALTER TABLE "ValidaQuero"."template" ADD "usuario" integer`);
        await queryRunner.query(`ALTER TABLE "ValidaQuero"."arquivo" ADD CONSTRAINT "FK_4e226d6dbe70f31016470c8f570" FOREIGN KEY ("usuario") REFERENCES "ValidaQuero"."usuario"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "ValidaQuero"."arquivo" ADD CONSTRAINT "FK_3accebf59e7539e95071e6d6100" FOREIGN KEY ("template") REFERENCES "ValidaQuero"."template"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "ValidaQuero"."template" ADD CONSTRAINT "FK_f3c48e7a261c2c7a415ffaa06e0" FOREIGN KEY ("usuario") REFERENCES "ValidaQuero"."usuario"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ValidaQuero"."template" DROP CONSTRAINT "FK_f3c48e7a261c2c7a415ffaa06e0"`);
        await queryRunner.query(`ALTER TABLE "ValidaQuero"."arquivo" DROP CONSTRAINT "FK_3accebf59e7539e95071e6d6100"`);
        await queryRunner.query(`ALTER TABLE "ValidaQuero"."arquivo" DROP CONSTRAINT "FK_4e226d6dbe70f31016470c8f570"`);
        await queryRunner.query(`ALTER TABLE "ValidaQuero"."template" DROP COLUMN "usuario"`);
        await queryRunner.query(`ALTER TABLE "ValidaQuero"."arquivo" DROP COLUMN "template"`);
        await queryRunner.query(`ALTER TABLE "ValidaQuero"."arquivo" DROP COLUMN "usuario"`);
    }

}
