import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Todo from '../entity/todo.entity';
import { UpdateTodoDto } from '../dto/updatetodo.dto';
import { CreateTodoDto } from '../dto/createtodo.dto';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo) private todoRepository: Repository<Todo>,
  ) {}
  //Get all todos
  getAllTodos() {
    return this.todoRepository.find();
  }
  //Get todo by id
  async getTodoById(id: number) {
    const todo = await this.todoRepository.findOne(id as any);
    if (todo) {
      return todo;
    }
    throw new HttpException('Todo not found', HttpStatus.NOT_FOUND);
  }
  //Create todo
  async createTodo(todo: CreateTodoDto) {
    const newTodo = await this.todoRepository.create(todo);
    await this.todoRepository.save(newTodo);
    return newTodo;
  }
}
