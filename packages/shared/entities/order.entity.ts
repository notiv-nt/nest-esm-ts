import { Entity, PrimaryGeneratedColumn, ManyToOne, type Relation } from 'typeorm';
import { User } from './user.entity.ts';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.orders, { nullable: false })
  user: Relation<User>;
}
