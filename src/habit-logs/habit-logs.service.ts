import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HabitLog } from '../entities/habit-log.entity';
import { HabitsService } from '../habits/habits.service';

@Injectable()
export class HabitLogsService {
  constructor(
    @InjectRepository(HabitLog)
    private habitLogRepository: Repository<HabitLog>,
    private habitsService: HabitsService,
  ) {}

  async createLog(habitId: number, logData: Partial<HabitLog>): Promise<HabitLog> {
    const habit = await this.habitsService.findOne(habitId);
    if (!habit) throw new NotFoundException('Habit not found');

    const log = this.habitLogRepository.create({ ...logData, habit });
    return this.habitLogRepository.save(log);
  }

  async findLogsByHabit(habitId: number): Promise<HabitLog[]> {
    return this.habitLogRepository.find({ where: { habit: { habit_id: habitId } } });
  }

  async deleteLog(logId: number): Promise<void> {
    const result = await this.habitLogRepository.delete(logId);
    if (result.affected === 0) throw new NotFoundException('Log not found');
  }
}