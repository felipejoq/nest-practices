import { TaskStatus } from "src/const/task";
import { TaskStatus as TaskStatusType } from "src/types/tasks";

export class Task {

  id: number
  title: string
  description: string
  status: TaskStatusType

  constructor(title:string, description:string) {
    this.id = Math.floor(Date.now() * Math.random());
    this.title = title;
    this.description = description;
    this.status = TaskStatus.PENDING;
  }
 
}