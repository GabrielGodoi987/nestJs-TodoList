import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { TasksEntity } from '../entities/Task.entity';
import { CreateTaskDTO } from '../dto/CreateTask.dto';
import { UpdateTaskDTO } from '../dto/UpdateTask.dto';

@Injectable()
export class TaskRepository {
  private readonly prismaService: PrismaService;

  async findAllTasks(): Promise<TasksEntity[]> {
    return await this.prismaService.tasks.findMany();
  }

  async findBydName(name: string) {
    return await this.prismaService.tasks.findFirst({
      where: {
        name: name,
      },
    });
  }

  async findTaskById(id: string) {
    return await this.prismaService.tasks.findUnique({
      where: {
        id: id,
      },
    });
  }

  async createTask(createTask: CreateTaskDTO): Promise<TasksEntity> {
    return await this.prismaService.tasks.create({
      data: createTask,
    });
  }

  async updateTask(
    id: string,
    updateTask: UpdateTaskDTO,
  ): Promise<TasksEntity> {
    return await this.prismaService.tasks.update({
      data: updateTask,
      where: {
        id: id,
      },
    });
  }
  async completeTask(id: string): Promise<TasksEntity> {
    return await this.prismaService.tasks.update({
      data: {
        isCompleted: true,
      },
      where: {
        id: id,
      },
    });
  }

  async deleteTask(id: string): Promise<TasksEntity> {
    return await this.prismaService.tasks.delete({
      where: {
        id: id,
      },
    });
  }
}
