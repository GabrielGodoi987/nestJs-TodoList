import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { TaskRepository } from './repository/task.repository';
import { CreateTaskDTO } from './dto/CreateTask.dto';
import { UpdateTaskDTO } from './dto/UpdateTask.dto';
import { StringUtil } from '../utils/String.util';

@Injectable()
export class TaskService {
  constructor(private readonly repository: TaskRepository) {}

  async getAll() {
    return await this.repository.findAllTasks();
  }

  async create(createTask: CreateTaskDTO) {
    const isExistent = await this.isExistentTask(createTask);
    if (isExistent)
      throw new HttpException('Tarefa já existent', HttpStatus.BAD_REQUEST);
    if (createTask.name.length < 5)
      throw new HttpException(
        'O nome ter no mínimo 5 caracteres',
        HttpStatus.BAD_REQUEST,
      );

    return await this.repository.createTask(createTask);
  }

  async update(id: string, updateTask: UpdateTaskDTO) {
    const taskExists = await this.repository.findTaskById(id);
    if (!taskExists)
      throw new HttpException('Tarefa não existe', HttpStatus.NOT_FOUND);

    return this.repository.updateTask(id, updateTask);
  }

  async completedTask(id: string) {
    const task = await this.repository.findTaskById(id);
    if (!task)
      throw new HttpException('Tarefa não encontrada', HttpStatus.BAD_REQUEST);

    if (task.isCompleted)
      throw new HttpException(
        'A tarefa já foi completada',
        HttpStatus.BAD_REQUEST,
      );

    return this.repository.completeTask(id);
  }

  async deleteTask(id: string) {
    const taskExists = await this.repository.findTaskById(id);
    if (!taskExists)
      throw new HttpException('Tarefa não existe', HttpStatus.NOT_FOUND);

    return await this.repository.deleteTask(id);
  }

  async isExistentTask(task: CreateTaskDTO): Promise<any> {
    const { name } = task;
    const normalize = StringUtil.tiraAcentos(name.toUpperCase());
    const tasks = await this.repository.findAllTasks();

    for (const element of tasks) {
      if (normalize === StringUtil.tiraAcentos(element.name.toUpperCase())) {
        return true;
      }
    }

    return false;
  }
}
