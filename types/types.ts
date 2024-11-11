export interface Task {
  name: string;
  cronExpression: string;
  description: string;
  status: string;
}
export interface TaskResponse {
  tasks: Task[];
}
