import {
  Get,
  Post,
  Put,
  Delete,
  Body,
  Controller,
  Param,
} from '@nestjs/common';
import CreateTodoDto from '../dto/createtodo.dto';
import { TodosService } from '../service/todo.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}
  //Get all todos
  @Get()
  getTodos() {
    return this.todosService.getAllTodos();
  }
  // create todo
  @Post()
  async createTodo(@Body() todo: CreateTodoDto) {
    return this.todosService.createTodo(todo);
  }
}
