import { Module } from '@nestjs/common';
import { AwsService } from './aws.service';
import { AwsController } from './aws.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Aw } from './entities/aw.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Aw])],
  controllers: [AwsController],
  providers: [AwsService],
})
export class AwsModule {}
