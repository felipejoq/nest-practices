import { TaskStatus } from "src/tasks/const/task";
import { TaskStatus as TaskStatusType } from "src/tasks/types/tasks";

export class Task {

  id: number
  title: string
  description: string
  status: TaskStatusType

  constructor(title:string, description:string, status: TaskStatusType) {
    this.id = Math.floor(Date.now() * Math.random());
    this.title = title;
    this.description = description;
    this.status = status;
  }
 
}