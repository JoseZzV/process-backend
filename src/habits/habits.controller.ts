import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { HabitsService } from './habits.service';
import { Habit } from '../entities/habit.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('habits')
export class HabitsController {
  constructor(private readonly habitsService: HabitsService) {}

  @Get()
  findAll(): Promise<Habit[]> {
    return this.habitsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Habit> {
    return this.habitsService.findOne(id);
  }

  @Post()
  create(@Body() habitData: Partial<Habit>): Promise<Habit> {
    return this.habitsService.create(habitData);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() habitData: Partial<Habit>): Promise<Habit> {
    return this.habitsService.update(id, habitData);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<void> {
    return this.habitsService.delete(id);
  }
}