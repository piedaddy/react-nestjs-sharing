import { Exclude } from 'class-transformer';
// import { IsOptional } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 96,
    nullable: false,
  })
  firstName: string;

  @Column({
    type: 'varchar',
    length: 96,
    nullable: true,
  })
  lastName: string;

  @Column({
    type: 'varchar',
    length: 96,
    nullable: false,
    unique: true,
  })
  email: string;

  @Column({
    type: 'varchar',
    length: 96,
    // nullable: false,
    // will make it true for google authentication! o
    // nullable: true,
  })
  @Exclude()
  // will make it optional for google authentication! o
  password: string;

  //   @IsOptional()
  //   @OneToMany(() => Post, (post) => post.author)
  //   posts?: Post[];

  //   //only bc of google auth
  //   @Column({
  //     type: 'varchar',
  //     nullable: true,
  //   })
  //   @Exclude()
  //   googleId?: string;
}
