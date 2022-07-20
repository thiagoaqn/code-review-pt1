import * as moment from 'moment';
import { v4 as Uuid } from 'uuid';

import { Injectable } from '@nestjs/common';
import { Task } from './task';

@Injectable()
export class TaskService {
  private days = 10; //tempo decorrido em dias

  create(task: Task): Task {
    return { id: Uuid(), ...task };
  }

  find(id: string): Task {
    return { id, createAt: new Date() };
  }

  findAll(): Array<Task> {
    const items = [{ id: Uuid(), createAt: new Date() }];

    return items.filter((item) => {
      return moment(item.createAt).diff(new Date(), 'days') >= this.days
    });
  }
}
