import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service.ts';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    this.appService.getHello();
  }

  @Get('/create')
  async test() {
    return await this.appService.create();
  }
}
