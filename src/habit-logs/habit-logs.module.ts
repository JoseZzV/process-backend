import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HabitLog } from '../entities/habit-log.entity';
import { HabitsModule } from '../habits/habits.module'; 
import { HabitLogsService } from './habit-logs.service';
import { HabitLogsController } from './habit-logs.controller';

@Module({
  imports: [TypeOrmModule.forFeature([HabitLog]), HabitsModule],
  providers: [HabitLogsService],
  controllers: [HabitLogsController],
})
export class HabitLogsModule {}