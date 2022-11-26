import { MigrationInterface, QueryRunner } from "typeorm";

export class initialMigrations1669472946601 implements MigrationInterface {
    name = 'initialMigrations1669472946601'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "contacts" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "fullName" character varying(60) NOT NULL, "email" character varying(60) NOT NULL, "mobilePhone" character varying(15) NOT NULL, "phone" character varying(20), CONSTRAINT "PK_b99cd40cfd66a99f1571f4f72e6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "fullName" character varying(60) NOT NULL, "email" character varying(60) NOT NULL, "mobilePhone" character varying(15) NOT NULL, "phone" character varying(20), "isActive" boolean NOT NULL DEFAULT true, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "contacts"`);
    }

}
