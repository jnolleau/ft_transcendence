import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/createUser.dto';
import { ApiCreatedResponse } from '@nestjs/swagger';
import { UpdateUserDto } from './dto/updateUser.dto';

@Controller('users')
export class UsersController {
	constructor(private readonly userService: UsersService) {}


	@Get()
	@ApiCreatedResponse({
		description: 'List all users in database',
		type: [User],
	  })
	getUsers(): Promise<User[]> {
		return this.userService.getUsers();
	}

	@Get(':id')
	@ApiCreatedResponse({
		description: 'The user has been found in database.',
		type: User,
	  })
	getUser(@Param('id') id: number): Promise<User> {
		return this.userService.getUserbyId(id);
	}

	@Post()
	@ApiCreatedResponse({
		description: 'The user has been successfully created.',
		type: User,
	  })
	async saveUser(@Body() newUser : CreateUserDto) : Promise<User> {
		return await this.userService.saveUser(newUser);
	}

	@Post()
	@ApiCreatedResponse({
		description: 'The user has been successfully updated.',
		type: User,
	  })
	async updateUser(@Body() updatedUser : UpdateUserDto) : Promise<User> {
		return await this.userService.updateUser(updatedUser);
	}
}
