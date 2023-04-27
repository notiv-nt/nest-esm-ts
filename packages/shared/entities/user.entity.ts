import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { some } from './some';

console.log(some);

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;
}
