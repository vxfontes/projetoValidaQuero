import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1696435927562 implements MigrationInterface {
    name = 'Default1696435927562'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "ValidaQuero"."usuario_perfil_enum" AS ENUM('Gestor', 'Gerente', 'Time')`);
        await queryRunner.query(`CREATE TABLE "ValidaQuero"."usuario" ("nome" character varying NOT NULL, "matricula" character varying NOT NULL, "senha" character varying NOT NULL, "perfil" "ValidaQuero"."usuario_perfil_enum" NOT NULL, "verificado" boolean NOT NULL, CONSTRAINT "PK_8907b27b6312769f5b846975ab0" PRIMARY KEY ("matricula"))`);
        await queryRunner.query(`CREATE TABLE "ValidaQuero"."formato" ("id" SERIAL NOT NULL, "titulo" character varying(4) NOT NULL, CONSTRAINT "PK_5249b356a6dc8ae4b2f337c5f7f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "ValidaQuero"."template_status_enum" AS ENUM('Ativo', 'Pendente', 'Desativado')`);
        await queryRunner.query(`CREATE TABLE "ValidaQuero"."template" ("id" SERIAL NOT NULL, "titulo" character varying NOT NULL, "descricao" text NOT NULL, "dataCriacao" TIMESTAMP NOT NULL DEFAULT now(), "quantidadeCampos" integer NOT NULL, "campos" jsonb NOT NULL, "status" "ValidaQuero"."template_status_enum" NOT NULL, "formato" integer, "usuario" character varying, CONSTRAINT "PK_fbae2ac36bd9b5e1e793b957b7f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "ValidaQuero"."arquivo" ("id" SERIAL NOT NULL, "titulo" character varying(30) NOT NULL, "dataCriacao" TIMESTAMP NOT NULL DEFAULT now(), "linhas" integer NOT NULL, "aprovado" boolean NOT NULL, "url" character varying, "usuario" character varying, "template" integer, CONSTRAINT "PK_956a4593ecc7963784e642c1b10" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "ValidaQuero"."template" ADD CONSTRAINT "FK_20d2e208793d1873d56b5d23380" FOREIGN KEY ("formato") REFERENCES "ValidaQuero"."formato"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "ValidaQuero"."template" ADD CONSTRAINT "FK_f3c48e7a261c2c7a415ffaa06e0" FOREIGN KEY ("usuario") REFERENCES "ValidaQuero"."usuario"("matricula") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "ValidaQuero"."arquivo" ADD CONSTRAINT "FK_4e226d6dbe70f31016470c8f570" FOREIGN KEY ("usuario") REFERENCES "ValidaQuero"."usuario"("matricula") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "ValidaQuero"."arquivo" ADD CONSTRAINT "FK_3accebf59e7539e95071e6d6100" FOREIGN KEY ("template") REFERENCES "ValidaQuero"."template"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ValidaQuero"."arquivo" DROP CONSTRAINT "FK_3accebf59e7539e95071e6d6100"`);
        await queryRunner.query(`ALTER TABLE "ValidaQuero"."arquivo" DROP CONSTRAINT "FK_4e226d6dbe70f31016470c8f570"`);
        await queryRunner.query(`ALTER TABLE "ValidaQuero"."template" DROP CONSTRAINT "FK_f3c48e7a261c2c7a415ffaa06e0"`);
        await queryRunner.query(`ALTER TABLE "ValidaQuero"."template" DROP CONSTRAINT "FK_20d2e208793d1873d56b5d23380"`);
        await queryRunner.query(`DROP TABLE "ValidaQuero"."arquivo"`);
        await queryRunner.query(`DROP TABLE "ValidaQuero"."template"`);
        await queryRunner.query(`DROP TYPE "ValidaQuero"."template_status_enum"`);
        await queryRunner.query(`DROP TABLE "ValidaQuero"."formato"`);
        await queryRunner.query(`DROP TABLE "ValidaQuero"."usuario"`);
        await queryRunner.query(`DROP TYPE "ValidaQuero"."usuario_perfil_enum"`);
    }

}
