import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateUserDto {
	// @ApiPropertyOptional()
	// readonly id: number;
	
	/**
	* The name of the created user
	*/
	readonly name: string;
	
	/**
	* The last name of the created user
	*/
	readonly surname: string
}
