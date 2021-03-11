import {MigrationInterface, QueryRunner} from "typeorm";

export class AddLastNameToDoctor1615461504949 implements MigrationInterface {
    name = 'AddLastNameToDoctor1615461504949'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "doctors" ADD "lastname" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "doctors" DROP COLUMN "lastname"`);
    }
}
