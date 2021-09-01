import { Injectable } from '@nestjs/common';
import { Jobs } from './interfaces/jobs.interface';
import { CreateJobsDto } from './dto/jobs.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { JobsEntity } from './entity/jobs.entity';
import { Repository } from 'typeorm';

@Injectable()
export class JobsService {
	constructor(
		@InjectRepository(JobsEntity)
		private readonly JobsRepository: Repository<JobsEntity>,
	) { }
	
	// // Attributs
	// jobs : Jobs[] = [];

	// public async setJobs() {
	// 	this.jobs = await this.JobsRepository.find();
	// }

	// public async getJob(id : number): Promise<Jobs> {
	// 	await this.setJobs();
	// 	return this.jobs.find(item => item.id === Number(id));
	// }
	
	public async getJobs(): Promise<Jobs[]> {
		return await this.JobsRepository.find();
	}

	public async getJob(id : number): Promise<Jobs> {
		return await this.JobsRepository.findOne(id);
	}	

	public async saveJob(newJob : CreateJobsDto) {
		// this.jobs = [...this.jobs, newJob];
		// console.log(this.jobs);
		return await this.JobsRepository.save(newJob);
	}

	private async getAll(): Promise<Jobs[]> {
		return await this.JobsRepository.find();
	}


}
