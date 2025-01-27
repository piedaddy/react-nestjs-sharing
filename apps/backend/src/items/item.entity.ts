import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', nullable: false })
  userId?: number;

  @Column({ type: 'varchar', length: 96, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 512, nullable: false })
  description: string;

  @Column({ type: 'boolean', nullable: false })
  isAvailable: boolean;

  @Column({ type: 'varchar', length: 256, nullable: false })
  imageUrl: string;

  @Column({ type: 'varchar', length: 5, nullable: false })
  locationId: string;
}
