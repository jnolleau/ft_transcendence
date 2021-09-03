import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './entity/users.entity';
import { CreateUsersDto } from './dto/users.dto';

@Injectable()
export class UsersService {
	constructor(
		@InjectRepository(Users)
		private readonly UsersRepository: Repository<Users>,
		) { }

	public getUsers() : Promise<User[]> {
		return this.UsersRepository.find();
	}

	public getUserbyId(id : number) : Promise<User> {
		return this.UsersRepository.findOne(id);
	}

	public async saveUser(newUser : CreateUsersDto) : Promise<User> {
		return await this.UsersRepository.save(newUser);	
	}
}
