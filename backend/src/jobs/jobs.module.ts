import { Module } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { JobsController } from './jobs.controller';
import { JobsEntity } from './entity/jobs.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([JobsEntity])],
  controllers: [JobsController],
  providers: [JobsService],
})
export class JobsModule {}
