import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './interfaces/user.interface';
import { CreateUsersDto } from './dto/users.dto';

@Controller('users')
export class UsersController {
	constructor(private readonly userService: UsersService) {}


	@Get()
	getUsers(): Promise<User[]> {
		return this.userService.getUsers();
	}	

	@Get(':id')
	getUser(@Param('id') id: number): Promise<User> {
		return this.userService.getUserbyId(id);
	}

	@Post()
	public async saveUser(@Body() newUser : CreateUsersDto) : Promise<CreateUsersDto> {
		return await this.userService.saveUser(newUser);
	}
}
