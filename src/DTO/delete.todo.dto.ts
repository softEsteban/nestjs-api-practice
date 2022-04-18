import { ApiProperty } from '@nestjs/swagger';

export class deleteTodoDto {
  @ApiProperty()
  id: number;
}

export default deleteTodoDto;
