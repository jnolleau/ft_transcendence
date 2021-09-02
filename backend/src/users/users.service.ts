import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './entity/users.entity';

@Injectable()
export class UsersService {
	constructor(
		@InjectRepository(Users)
		private readonly UsersRepository: Repository<Users>,
		) { }

	users : User[] = [
		{ id: 1,  name: "Roger", surname: "Federer" },
		{ id: 2,  name: "Rafa", surname: "Nadal" },
		{ id: 3,  name: "Andy", surname: "Murray" },
		{ id: 4,  name: "Novak", surname: "Djokovic" }
	]

	public getUsers() : Promise<User[]> {
		return this.UsersRepository.find();
	}

	public getUserbyId(id : number) : Promise<User> {
		return this.UsersRepository.findOne(id);
	}

	public saveUser(newUser : User) : void {
			this.UsersRepository.save(newUser);
	}


	





	// public async getJobs(): Promise<Jobs[]> {
	// 	return await this.UsersService.find();
	// }

	// public async getJob(id : number): Promise<Jobs> {
	// 	return await this.UsersService.findOne(id);
	// }	

	// public async saveJob(newJob : CreateJobsDto) {
	// 	// this.jobs = [...this.jobs, newJob];
	// 	// console.log(this.jobs);
	// 	return await this.UsersService.save(newJob);
	// }

	// private async getAll(): Promise<Jobs[]> {
	// 	return await this.UsersService.find();
	// }


}
