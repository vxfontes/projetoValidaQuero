import { Module } from '@nestjs/common';
import { TemplateService } from './template.service';
import { TemplateController } from './template.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Template } from './entities/template.entity';
import { Formato } from '../formato/entities/formato.entity';
import { User } from '../user/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Template, Formato, User])],
  controllers: [TemplateController],
  providers: [TemplateService],
})
export class TemplateModule {}
