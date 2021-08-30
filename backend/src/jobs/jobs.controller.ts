import { Controller, Get, Param } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { Jobs } from './interfaces/jobs.interface';

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Get()
  getJobs(): Jobs[] {
    return this.jobsService.getJobs();
  }
  @Get(':id')
  getJob(@Param('id') id: number): Jobs {
    return this.jobsService.getJob(id);
  }
}
