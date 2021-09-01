import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { Jobs } from './interfaces/jobs.interface';
import { CreateJobsDto } from './dto/jobs.dto';

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Get()
  public async getJobs(): Promise<Jobs[]> {
    return await this.jobsService.getJobs();
  }

  @Get(':id')
  public async getJob(@Param('id') id: number): Promise<Jobs> {
    return await this.jobsService.getJob(id);
  }

  @Post()
  public async saveJob(@Body() newJob : CreateJobsDto) {
    console.log('newJob', newJob);
    return await this.jobsService.saveJob(newJob); //On return newJob
  }
}
