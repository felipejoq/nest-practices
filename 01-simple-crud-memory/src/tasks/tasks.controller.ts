import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { TasksService } from './tasks.service'
import { TaskDto } from './dtos/task.dto';
import { QueryPaginateTask } from 'src/tasks/types/tasks';

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
  createTask(@Body() taskDto: TaskDto) {
    const newTask = this.taskService.createTask(taskDto)
    return newTask;
  }

  @Put(':id')
  updateTask(@Param('id', ParseIntPipe) id: number, @Body() taskDto: TaskDto){
    return this.taskService.updateTask(id, taskDto);
  }

  @Delete(':id')
  deleteTask(@Param('id', ParseIntPipe) id: number){
    return this.taskService.deleteTask(id)
  }
}
