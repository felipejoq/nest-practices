import { IsEnum, IsIn, IsNotEmpty, IsOptional, IsString, MinLength, isNotEmpty } from 'class-validator';
import { TaskStatus } from '../types/tasks';
import { TaskStatus as TaskStatusAccepted } from '../const/task';

export class TaskDto {

  @IsNotEmpty({ message: 'El título es requerido' })
  @IsString({ message: 'El título debe ser un texto' })
  @MinLength(10, { message: 'El título es muy corto' })
  title: string

  @IsNotEmpty({ message: 'La descripción es requerida' })
  @IsString({ message: 'La descripción debe ser un texto' })
  @MinLength(30, { message: 'La descripción es muy corta' })
  description: string

  @IsNotEmpty({ message: 'El estatus es requerido' })
  @IsEnum(TaskStatusAccepted, {message: `El estatus debe tener alguno de estos valores: ${Object.values(TaskStatusAccepted).join(', ')}`})
  status: TaskStatus;

  constructor(title: string, description: string, status: TaskStatus) {
    this.title = title;
    this.description = description;
    this.status = status;
  }

}