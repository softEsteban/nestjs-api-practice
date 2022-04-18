import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { todoDto } from 'src/DTO/todo.dto';
import createTodoDto from 'src/DTO/create.todo.dto';
import { Repository } from 'typeorm';
import Todo from '../entity/todo.entity';
import resultDto from 'src/DTO/result.dto';

@Injectable()
export class todoService {
  constructor(
    @InjectRepository(Todo) private todoRepository: Repository<Todo>,
  ) {}

  //Get all todos
  async getAllTodos() {
    try {
      const todos = await this.todoRepository.find();
      return new resultDto('Success', 'All Todos found!', todos);
    } catch (error) {
      return new resultDto('Fail', 'Error:' + error, {});
    }
  }

  //Get todo by id
  async getTodoById(id: any) {
    try {
      const todo = await this.todoRepository.findOne({ where: { id: id } });
      if (todo) {
        return new resultDto('Success', `Todo number ${todo.id} found`, todo);
      }
    } catch (error) {
      return new resultDto('Fail', `Error: ${error}`, {});
    }
  }

  //Create todo
  async createTodo(todo: createTodoDto) {
    const newTodo = await this.todoRepository.create(todo);
    await this.todoRepository.save(newTodo);
    return new resultDto('Success', `Todo was created!`, newTodo);
  }

  //Delete todo
  async deleteTodo(id: any) {
    this.todoRepository.delete(id);
    return new resultDto('Success', `Todo number ${id} was deleted!`, {});
  }

  //Update todo
  async updateTodo(todo: todoDto) {
    const id = todo.id;
    const updateTodo = await this.todoRepository.findOne({
      where: { id },
    });
    if (updateTodo) {
      this.todoRepository.save({
        id: id,
        title: todo.title,
        content: todo.content,
        isDone: todo.isDone,
      });
      return new resultDto('Success', 'Todo was updated!', updateTodo);
    }
    return new resultDto('Fail', 'Unreachable operation. Try again!', {});
  }
}
