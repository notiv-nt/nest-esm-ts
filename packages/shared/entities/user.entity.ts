import { Entity, Column, PrimaryGeneratedColumn, OneToMany, type Relation } from 'typeorm';
import { Order } from './order.entity.ts';

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

  @OneToMany(() => Order, (order) => order.user)
  orders: Relation<Order[]>;
}
