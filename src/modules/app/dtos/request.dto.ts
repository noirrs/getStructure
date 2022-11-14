import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class RequestDTO {

  @ApiProperty()
  @IsString()
  username: string;

  @ApiProperty()
  @IsString()
  repository: string;

  @ApiProperty()
  @IsString()
  branch: string;
}
