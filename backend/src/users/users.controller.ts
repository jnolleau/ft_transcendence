import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './interfaces/user.interface';

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
	saveUser(@Body() newUser : User) {
		console.log(newUser);
		this.userService.saveUser(newUser);
	}




// 	@Post()
// 	public async saveJob(@Body() newJob : CreateJobsDto) {
// 		console.log('newJob', newJob);
//     return await this.jobsService.saveJob(newJob); //On return newJob
// }
}
