import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Todo from './entity/todo.entity';
import { TodosService } from './service/todo.service';
import { TodosController } from './controller/todo.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Todo])],
  controllers: [TodosController],
  providers: [TodosService],
})
export class TodosModule {}
