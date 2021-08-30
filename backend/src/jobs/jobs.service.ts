import { Injectable } from '@nestjs/common';
import { Jobs } from './interfaces/jobs.interface';

@Injectable()
export class JobsService {
	jobs : Jobs[] = [
		{ "title": "job 1", "id": 1, "details": "Details of the first job" },
		{ "title": "job 2", "id": 2, "details": "Details of the 2nd job" },
		{ "title": "job 3", "id": 3, "details": "Details of the 3rd job" },
		{ "title": "job 4", "id": 4, "details": "Details of the 4th job" }
	];
	getJobs(): Jobs[] {
		return this.jobs;
	}
	getJob(id : number): Jobs {
		var filtered = this.jobs.filter(item => item.id == id);
		console.log(filtered);
		return filtered[0];
	}
}
