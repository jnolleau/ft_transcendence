import { Injectable } from '@nestjs/common';
import { Jobs } from './interfaces/jobs.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { JobsEntity } from '../entity/jobs.entity';
import { Repository } from 'typeorm';

@Injectable()
export class JobsService {
	constructor(@InjectRepository(JobsEntity) private readonly repo: Repository<JobsEntity>) { }
	
	// Attributs
	jobs : Jobs[] = [];

	public async setJobs() {
		this.jobs = await this.repo.find();
	}

	public getJobs(): Jobs[] {
		return this.jobs;
	}

	public async getJob(id : number): Promise<Jobs> {
		return await this.repo.findOne(id);
	}
	
	// public getJob(id : number): Jobs {
	// 	var filtered = this.jobs.filter(item => item.id == id);
	// 	console.log(filtered);
	// 	return filtered[0];
	// }
	
	private async getAll(): Promise<Jobs[]> {
		return await this.repo.find();
	}
}
