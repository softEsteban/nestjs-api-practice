import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import todoDto from 'src/DTO/todo.dto';
import { Repository } from 'typeorm';
import Todo from '../entity/todo.entity';

@Injectable()
export class todoService {
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
  async createTodo(todo: todoDto) {
    const newTodo = await this.todoRepository.create(todo);
    await this.todoRepository.save(newTodo);
    return newTodo;
  }

  //Delete todo
  async deleteTodo(id: any) {
    return this.todoRepository.delete(id);
  }

  //Update todo
  async updateTodo(todo: todoDto) {
    const id = todo.id;
    const updateTodo = await this.todoRepository.findOne({
      where: { id },
    });
    if (updateTodo) {
      return this.todoRepository.save({
        id: id,
        title: todo.title,
        content: todo.content,
        isDone: todo.isDone,
      });
    }
    throw new HttpException('Todo not found', HttpStatus.NOT_FOUND);
  }
}
