import { ApiProperty } from '@nestjs/swagger';

export class todoDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiProperty()
  content: string;

  @ApiProperty()
  isDone: boolean;
}

export default todoDto;
