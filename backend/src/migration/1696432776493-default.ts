import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1696432776493 implements MigrationInterface {
    name = 'Default1696432776493'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ValidaQuero"."template" ADD "formato" integer`);
        await queryRunner.query(`ALTER TABLE "ValidaQuero"."template" ADD CONSTRAINT "FK_20d2e208793d1873d56b5d23380" FOREIGN KEY ("formato") REFERENCES "ValidaQuero"."formato"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ValidaQuero"."template" DROP CONSTRAINT "FK_20d2e208793d1873d56b5d23380"`);
        await queryRunner.query(`ALTER TABLE "ValidaQuero"."template" DROP COLUMN "formato"`);
    }

}
