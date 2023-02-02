import { Module } from '@nestjs/common';
import { AppController } from './app.controller.ts';
import { AppService } from './app.service.ts';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../shared/entities/user.entity.ts';
import { Order } from '../../shared/entities/order.entity.ts';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'nt',
      password: '',
      database: 'temp',
      entities: [User, Order],
      synchronize: false,
    }),
    TypeOrmModule.forFeature([User, Order]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
