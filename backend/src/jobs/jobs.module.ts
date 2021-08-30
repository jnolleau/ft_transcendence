import { Module } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { JobsController } from './jobs.controller';

@Module({
  imports: [],
  controllers: [JobsController],
  providers: [JobsService],
})
export class JobsModule {}
