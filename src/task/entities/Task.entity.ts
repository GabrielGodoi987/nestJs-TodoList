import { Tasks } from '@prisma/client';

export class TasksEntity implements Tasks {
  id: string;
  name: string;
  description: string;
  isCompleted: boolean;
  creationDate: Date;
  updatedAt: Date;
}
