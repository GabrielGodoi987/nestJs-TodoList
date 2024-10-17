import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDTO } from './dto/CreateTask.dto';
import { UpdateTaskDTO } from './dto/UpdateTask.dto';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post('create')
  createTask(@Body() createTask: CreateTaskDTO) {
    return this.taskService.create(createTask);
  }

  @Put(':id')
  updateTask(@Param('id') id: string, @Body() updateTask: UpdateTaskDTO) {
    return this.taskService.update(id, updateTask);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    return this.taskService.deleteTask(id);
  }

  @Get('/listall')
  getAllTasks() {
    return this.taskService.getAll();
  }

  @Patch(':id/complete')
  compledTask(@Param('id') id: string) {
    return this.taskService.completedTask(id);
  }
}
