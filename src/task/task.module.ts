import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { TaskRepository } from './repository/task.repository';
import { PrismaService } from 'src/prisma/prisma.service';
import { UtilsModule } from 'src/utils/utils.module';

@Module({
  controllers: [TaskController],
  providers: [TaskService, TaskRepository, PrismaService],
  imports: [UtilsModule],
})
export class TaskModule {}
