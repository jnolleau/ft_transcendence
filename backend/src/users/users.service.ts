import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './entity/users.entity';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';

@Injectable()
export class UsersService {
	constructor(
		@InjectRepository(Users)
		private readonly UsersRepository: Repository<Users>,
		) { }

	async getUsers() : Promise<User[]> {
		return await this.UsersRepository.find();
	}

	async getUserbyId(id : number) : Promise<User> {
		let res = await this.UsersRepository.findOne(id);
		console.log('res', res)
		return res;
	}

	public async saveUser(newUser : CreateUserDto) : Promise<User> {
		return await this.UsersRepository.save(newUser);
	}

	public async updateUser(updatedUser : UpdateUserDto) : Promise<User> {
		return await this.UsersRepository.save(updatedUser);
	}
}
