import {MigrationInterface, QueryRunner} from "typeorm";

export class UserMigration1632221981336 implements MigrationInterface {
    name = 'UserMigration1632221981336'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`mynestjs\`.\`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`code\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`mynestjs\`.\`user\``);
    }

}
