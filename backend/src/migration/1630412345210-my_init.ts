import {MigrationInterface, QueryRunner} from "typeorm";

export class myInit1630412345210 implements MigrationInterface {
    name = 'myInit1630412345210'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."jobs" DROP COLUMN "test"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."jobs" ADD "test" character varying NOT NULL`);
    }

}
