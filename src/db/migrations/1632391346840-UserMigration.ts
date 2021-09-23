import { MigrationInterface, QueryRunner } from 'typeorm';

export class UserMigration1632391346840 implements MigrationInterface {
  name = 'UserMigration1632391346840';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`mynestjs\`.\`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`code\` varchar(255) NULL, \`isActive\` tinyint NOT NULL DEFAULT 0, \`creationAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`mynestjs\`.\`user\``);
  }
}
