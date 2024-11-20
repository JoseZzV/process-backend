import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Habit } from '../entities/habit.entity';

@Injectable()
export class HabitsService {
  constructor(
    @InjectRepository(Habit)
    private habitRepository: Repository<Habit>,
  ) {}

  async findAll(): Promise<Habit[]> {
    return this.habitRepository.find({ relations: ['user'] });
  }

  async findOne(id: number): Promise<Habit> {
    return this.habitRepository.findOne({ where: { habit_id: id }, relations: ['user'] });
  }

  async create(habitData: Partial<Habit>): Promise<Habit> {
    const habit = this.habitRepository.create(habitData);
    return this.habitRepository.save(habit);
  }

  async update(id: number, habitData: Partial<Habit>): Promise<Habit> {
    await this.habitRepository.update(id, habitData);
    return this.habitRepository.findOne({ where: { habit_id: id } });
  }

  async delete(id: number): Promise<void> {
    await this.habitRepository.delete(id);
  }
}