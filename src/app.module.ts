import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import typeOrmConfig from './config/typeorm.config';
import { UsersModule } from './users/users.module';
import { HabitsModule } from './habits/habits.module';
import { AuthModule } from './auth/auth.module';
import { HabitLogsModule } from './habit-logs/habit-logs.module';

@Module({
  imports: [
    
    TypeOrmModule.forRoot(typeOrmConfig),
    
    UsersModule,
    
    HabitsModule,
    
    AuthModule,
    
    HabitLogsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
