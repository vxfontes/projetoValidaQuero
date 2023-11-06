import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {} // injeção (mais fundo que inversão) de dependencia -> solid

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
