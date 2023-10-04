import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1696433170562 implements MigrationInterface {
    name = 'Default1696433170562'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ValidaQuero"."template" DROP CONSTRAINT "FK_51d8f78124a030c3bd5f8ad57be"`);
        await queryRunner.query(`ALTER TABLE "ValidaQuero"."template" RENAME COLUMN "formatoId" TO "formato"`);
        await queryRunner.query(`ALTER TABLE "ValidaQuero"."template" ADD CONSTRAINT "FK_20d2e208793d1873d56b5d23380" FOREIGN KEY ("formato") REFERENCES "ValidaQuero"."formato"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ValidaQuero"."template" DROP CONSTRAINT "FK_20d2e208793d1873d56b5d23380"`);
        await queryRunner.query(`ALTER TABLE "ValidaQuero"."template" RENAME COLUMN "formato" TO "formatoId"`);
        await queryRunner.query(`ALTER TABLE "ValidaQuero"."template" ADD CONSTRAINT "FK_51d8f78124a030c3bd5f8ad57be" FOREIGN KEY ("formatoId") REFERENCES "ValidaQuero"."formato"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
