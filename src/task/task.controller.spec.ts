import { Test, TestingModule } from '@nestjs/testing';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { TaskRepository } from './repository/task.repository';
import { PrismaService } from 'src/prisma/prisma.service';

describe('TaskController', () => {
  let controller: TaskController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaskController],
    }).compile();

    controller = new TaskController(
      new TaskService(new TaskRepository(new PrismaService())),
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
