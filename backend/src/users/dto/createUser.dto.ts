import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateUserDto {
	// @ApiPropertyOptional()
	// readonly id: number;

	@ApiProperty()
	readonly name: string;

	@ApiProperty()
	readonly surname: string
}
