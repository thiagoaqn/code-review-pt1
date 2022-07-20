import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Task } from './task';
import { TaskService } from './task.service';

@Controller('todo/task')
export class TaskController {
  constructor(private readonly service: TaskService) {}

  @Post()
  create(@Body() task: Task): boolean {
    this.service.create(task);
    return true;
  }

  @Get('/:id')
  find(@Param('id') id: string): Task {
    return this.service.find(id);
  }

  @Get()
  findAll(): Array<Task> {
    return this.service.findAll();
  }
}
