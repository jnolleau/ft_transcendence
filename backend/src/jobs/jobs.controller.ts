import { Controller, Get, Param } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { Jobs } from './interfaces/jobs.interface';

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Get()
  public async getJobs(): Promise<Jobs[]> {
    await this.jobsService.setJobs();
    return this.jobsService.getJobs();
  }

  @Get(':id')
  public async getJob(@Param('id') id: number): Promise<Jobs> {
    return await this.jobsService.getJob(id);
  }
}
