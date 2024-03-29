import { BadRequestException, Injectable } from '@nestjs/common';
import { Task } from './entities/task.entity';
import { UpdateTaskDto, CreateTaskDto } from './dtos';
import { TaskStatus } from './const/task';

@Injectable()
export class TasksService {

  private tasks: Task[] = [
    new Task('Task 1', 'Task 1 Description', TaskStatus.PENDING),
    new Task('Task 2', 'Task 2 Description', TaskStatus.PENDING),
    new Task('Task 3', 'Task 3 Description', TaskStatus.PENDING),
    new Task('Task 4', 'Task 4 Description', TaskStatus.PENDING),
    new Task('Task 5', 'Task 5 Description', TaskStatus.PENDING),
  ]

  getTasks() {
    return this.tasks;
  }

  getTaskById(id: number) {
    const taskFinded = this.tasks.find(task => task.id === id)
    if (!taskFinded) throw new BadRequestException('No existe el recurso');
    return taskFinded;
  }

  createTask(taskDto: CreateTaskDto) {
    const createTaskDto = new CreateTaskDto(taskDto.title, taskDto.description)
    const { title, description, status } = createTaskDto;
    const newTask = new Task(title, description, status);
    this.tasks.push(newTask);
    return newTask;
  }

  updateTask(id: number, taskDto: UpdateTaskDto) {
    const taskExists = this.getTaskById(id);
    Object.assign(taskExists, taskDto);
    return taskExists;
  }

  deleteTask(id: number) {
    this.getTaskById(id);
    this.tasks = this.tasks.filter(task => task.id !== id);
    return this.tasks;
  }
}
