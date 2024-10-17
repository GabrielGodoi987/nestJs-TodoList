import { IsBoolean, IsISO8601, IsString } from 'class-validator';

export class CreateTaskDTO {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsBoolean()
  isCompleted: boolean;

  @IsISO8601()
  creationDate: string;

  @IsISO8601()
  updatedAt: string;
}
