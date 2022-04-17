import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Todo from './entity/todo.entity';
import { todoService } from './service/todo.service';
import { todoController } from './controller/todo.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Todo])],
  controllers: [todoController],
  providers: [todoService],
})
export class TodosModule {}
