import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateUsersDto {
	// @ApiPropertyOptional()
	// readonly id: number;

	@ApiProperty()
	readonly name: string;

	@ApiProperty()
	readonly surname: string
}
