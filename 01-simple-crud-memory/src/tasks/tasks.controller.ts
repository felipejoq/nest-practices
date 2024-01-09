import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { TasksService } from './tasks.service'
import { CreateTaskDto } from './dtos/create.dto';
import { QueryPaginateTask } from 'src/tasks/types/tasks';
import { UpdateTaskDto } from './dtos/update.dto';

@Controller('tasks')
export class TasksController {

  constructor(private taskService: TasksService) { }

  @Get()
  getTasks(@Query() queryPaginateTask: QueryPaginateTask) {
    //Query parametros para paginar, por ejemplo: limit = ${queryPaginateTask.limit}
    return this.taskService.getTasks()
  }

  @Get(':id')
  getTaskById(@Param('id', ParseIntPipe) id: number) {
    return this.taskService.getTaskById(id);
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto) {
    const newTask = this.taskService.createTask(createTaskDto)
    return newTask;
  }

  @Put(':id')
  updateTask(@Param('id', ParseIntPipe) id: number, @Body() updateTaskDto: UpdateTaskDto){
    return this.taskService.updateTask(id, updateTaskDto);
  }

  @Delete(':id')
  deleteTask(@Param('id', ParseIntPipe) id: number){
    return this.taskService.deleteTask(id)
  }
}
