import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Message {
  @PrimaryGeneratedColumn({unsigned: true})
  id: number;

  @Column({length: 40})
  userName: string;

  @Column({length: 45})
  email: string;

  @Column({nullable: true, length: 15})
  phoneNumber?: string;

  @Column({length: 200})
  message: string;
}
