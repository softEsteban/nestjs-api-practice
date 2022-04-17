import { Get, Post, Put, Delete, Body, Controller } from '@nestjs/common';
import { todoDto } from '../DTO/todo.dto';
import { todoService } from '../service/todo.service';

@Controller('todos')
export class todoController {
  constructor(private readonly todoService: todoService) {}
  //Get all todos
  @Get()
  getTodos() {
    return this.todoService.getAllTodos();
  }
  //Create todo
  @Post()
  async createTodo(@Body() todo: todoDto) {
    return this.todoService.createTodo(todo);
  }
  //Delete todo
  @Delete()
  async deleteTodo(@Body() todo: todoDto) {
    return this.todoService.deleteTodo(Number(todo.id));
  }
  //Update todo
  @Put()
  async updateTodo(@Body() todo: todoDto) {
    return this.todoService.updateTodo(todo);
  }
}
