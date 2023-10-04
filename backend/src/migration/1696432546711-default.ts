import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1696432546711 implements MigrationInterface {
    name = 'Default1696432546711'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ValidaQuero"."template" DROP CONSTRAINT "FK_fbae2ac36bd9b5e1e793b957b7f"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ValidaQuero"."template" ADD CONSTRAINT "FK_fbae2ac36bd9b5e1e793b957b7f" FOREIGN KEY ("id") REFERENCES "ValidaQuero"."formato"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
