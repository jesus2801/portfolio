import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Visit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  rute: string;

  @Column()
  ip: string;

  @Column()
  date: Date;
}
