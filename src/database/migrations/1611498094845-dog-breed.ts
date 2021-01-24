import { MigrationInterface, QueryRunner } from 'typeorm';

export class dogBreed1611498094845 implements MigrationInterface {
  name = 'dogBreed1611498094845';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "dog_breed" ("Id" varchar PRIMARY KEY NOT NULL, "Name" varchar(300) NOT NULL, "Picture" varchar(500) NOT NULL)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "dog_breed"`);
  }
}
