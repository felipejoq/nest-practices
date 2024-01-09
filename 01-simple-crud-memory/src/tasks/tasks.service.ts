import { Injectable } from '@nestjs/common';
import { Task } from './task.entity';
import { CreateTaskDto } from './dtos/create.dto';
import { UpdateTaskDto } from './dtos/update.dto';

@Injectable()
export class TasksService {

  private tasks: Task[] = [
    new Task('Task 1', 'Task 1 Description'),
    new Task('Task 2', 'Task 2 Description'),
    new Task('Task 3', 'Task 3 Description'),
    new Task('Task 4', 'Task 4 Description'),
    new Task('Task 5', 'Task 5 Description'),
  ]

  getTasks() {
    return this.tasks;
  }

  getTaskById(id: number) {

    const taskFinded = this.tasks.find(task => task.id === id)
    if (!taskFinded) throw new Error('No existe');

    return taskFinded;

  }

  createTask(createTaskDto: CreateTaskDto) {
    const { title, description } = createTaskDto;
    const newTask = new Task(title, description);
    this.tasks.push(newTask);
    return newTask;
  }

  updateTask(id: number, updateTaskDto: UpdateTaskDto) {

    const taskExists = this.getTaskById(id);
    const { title, description } = updateTaskDto;

    taskExists.title = title;
    taskExists.description = description;

    return taskExists;
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);

    return this.tasks;
  }
}
