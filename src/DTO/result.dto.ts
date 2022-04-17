import { ApiProperty } from '@nestjs/swagger';

export class resultDto {
  @ApiProperty()
  status: string;

  @ApiProperty()
  messsage: string;

  @ApiProperty()
  data: string;
}

export default resultDto;
