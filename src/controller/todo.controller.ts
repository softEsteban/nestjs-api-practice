import {
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Controller,
} from '@nestjs/common';
import { todoDto } from '../DTO/todo.dto';
import { createTodoDto } from '../DTO/create.todo.dto';
import { todoService } from '../service/todo.service';
import deleteTodoDto from 'src/DTO/delete.todo.dto';

@Controller('todos')
export class todoController {
  constructor(private readonly todoService: todoService) {}
  //Get all todos
  @Get()
  getTodos() {
    return this.todoService.getAllTodos();
  }
  //Get todo by id
  @Get(':id')
  getTodoById(@Param('id') id: number) {
    return this.todoService.getTodoById(id);
  }
  //Create todo
  @Post()
  async createTodo(@Body() todo: createTodoDto) {
    return this.todoService.createTodo(todo);
  }
  //Update todo
  @Put()
  async updateTodo(@Body() todo: todoDto) {
    return this.todoService.updateTodo(todo);
  }
  //Delete todo  @Body'()' todo: todoDto
  @Delete()
  async deleteTodo(@Body() todo: deleteTodoDto) {
    return this.todoService.deleteTodo(todo.id);
  }
}
