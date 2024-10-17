import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDTO } from './CreateTask.dto';

export class UpdateTaskDTO extends PartialType(CreateTaskDTO) {}
