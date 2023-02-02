import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../shared/entities/user.entity.ts';
import { Order } from '../../shared/entities/order.entity.ts';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(Order) private readonly orderRepository: Repository<Order>,
  ) {}

  getHello() {
    return this.userRepository.find();
  }

  create() {
    return this.userRepository.save({
      firstName: 'John',
      lastName: 'Doe',
    });
  }
}
