import { ApiProperty } from "@nestjs/swagger";

export class RequestDTO {

  @ApiProperty()
  username: string;

  @ApiProperty()
  repository: string;

  @ApiProperty()
  branch: string;
}
