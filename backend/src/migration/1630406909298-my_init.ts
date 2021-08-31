import {MigrationInterface, QueryRunner} from "typeorm";

export class myInit1630406909298 implements MigrationInterface {
    name = 'myInit1630406909298'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."jobs" ADD "test" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."jobs" DROP COLUMN "test"`);
    }

}
