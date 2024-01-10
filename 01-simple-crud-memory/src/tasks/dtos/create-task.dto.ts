import { IsNotEmpty, IsString, MinLength } from 'class-validator';
import { TaskStatus } from '../types/tasks';
import { TaskStatus as TaskStatusAccepted } from '../const/task';

export class CreateTaskDto {

  @IsNotEmpty({ message: 'El título es requerido' })
  @IsString({ message: 'El título debe ser un texto' })
  @MinLength(10, { message: 'El título es muy corto' })
  title: string

  @IsNotEmpty({ message: 'La descripción es requerida' })
  @IsString({ message: 'La descripción debe ser un texto' })
  @MinLength(30, { message: 'La descripción es muy corta' })
  description: string

  status?: TaskStatus;

  constructor(title: string, description: string) {
    this.title = title;
    this.description = description;
    this.status = TaskStatusAccepted.PENDING;
  }

}