import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { PrismaModule } from './prisma/prisma.module';
import { UtilsModule } from './utils/utils.module';

@Module({
  imports: [TaskModule, PrismaModule, UtilsModule],
})
export class AppModule {}
