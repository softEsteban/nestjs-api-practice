import { ApiProperty } from '@nestjs/swagger';

export class createTodoDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  content: string;

  @ApiProperty()
  isDone: boolean;
}

export default createTodoDto;
