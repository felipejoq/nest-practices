import { TaskStatus } from "src/tasks/const/task";

export interface QueryPaginateTask {
  limit: number;
  offset: number;
}

export type TaskStatus = typeof TaskStatus[keyof typeof TaskStatus];