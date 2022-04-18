import { ApiProperty } from '@nestjs/swagger';

export class resultDto {
  @ApiProperty()
  status: string;

  @ApiProperty()
  messsage: string;

  @ApiProperty()
  data: string;

  constructor(status, message, data) {
    this.status = status;
    this.messsage = message;
    this.data = data;
  }
}

export default resultDto;
