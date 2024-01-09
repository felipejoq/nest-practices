import { TaskStatus } from "src/const/task";

export interface QueryPaginateTask {
  limit: number;
  offset: number;
}

export type TaskStatus = typeof TaskStatus[keyof typeof TaskStatus];