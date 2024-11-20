import { Controller, Post, Get, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { HabitLogsService } from './habit-logs.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { HabitLog } from 'src/entities/habit-log.entity';

@UseGuards(JwtAuthGuard)
@Controller('habits/:habitId/logs')
export class HabitLogsController {
  constructor(private readonly habitLogsService: HabitLogsService) {}

  @Post()
  createLog(@Param('habitId') habitId: number, @Body() logData: Partial<HabitLog>) {
    return this.habitLogsService.createLog(habitId, logData);
  }

  @Get()
  findLogs(@Param('habitId') habitId: number) {
    return this.habitLogsService.findLogsByHabit(habitId);
  }

  @Delete(':logId')
  deleteLog(@Param('logId') logId: number) {
    return this.habitLogsService.deleteLog(logId);
  }
}