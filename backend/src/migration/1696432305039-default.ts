import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1696432305039 implements MigrationInterface {
    name = 'Default1696432305039'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "ValidaQuero"."arquivo" ("id" SERIAL NOT NULL, "titulo" character varying(30) NOT NULL, "dataCriacao" TIMESTAMP NOT NULL DEFAULT now(), "linhas" integer NOT NULL, "aprovado" boolean NOT NULL, "url" character varying, CONSTRAINT "PK_956a4593ecc7963784e642c1b10" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "ValidaQuero"."formato" ("id" SERIAL NOT NULL, "titulo" character varying(4) NOT NULL, CONSTRAINT "PK_5249b356a6dc8ae4b2f337c5f7f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "ValidaQuero"."template_status_enum" AS ENUM('Ativo', 'Pendente', 'Desativado')`);
        await queryRunner.query(`CREATE TABLE "ValidaQuero"."template" ("id" SERIAL NOT NULL, "titulo" character varying NOT NULL, "descricao" text NOT NULL, "dataCriacao" TIMESTAMP NOT NULL DEFAULT now(), "quantidadeCampos" integer NOT NULL, "campos" jsonb NOT NULL, "status" "ValidaQuero"."template_status_enum" NOT NULL, CONSTRAINT "PK_fbae2ac36bd9b5e1e793b957b7f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "ValidaQuero"."usuario_perfil_enum" AS ENUM('Gestor', 'Gerente', 'Time')`);
        await queryRunner.query(`CREATE TABLE "ValidaQuero"."usuario" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "matricula" character varying NOT NULL, "senha" character varying NOT NULL, "perfil" "ValidaQuero"."usuario_perfil_enum" NOT NULL, "verificado" boolean NOT NULL, CONSTRAINT "UQ_8907b27b6312769f5b846975ab0" UNIQUE ("matricula"), CONSTRAINT "PK_a56c58e5cabaa04fb2c98d2d7e2" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "ValidaQuero"."usuario"`);
        await queryRunner.query(`DROP TYPE "ValidaQuero"."usuario_perfil_enum"`);
        await queryRunner.query(`DROP TABLE "ValidaQuero"."template"`);
        await queryRunner.query(`DROP TYPE "ValidaQuero"."template_status_enum"`);
        await queryRunner.query(`DROP TABLE "ValidaQuero"."formato"`);
        await queryRunner.query(`DROP TABLE "ValidaQuero"."arquivo"`);
    }

}
