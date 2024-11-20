import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Habit } from './habit.entity';

@Entity()
export class HabitLog {
  @PrimaryGeneratedColumn()
  log_id: number;

  @Column({ type: 'date' })
  date: string; 

  @Column({ type: 'boolean' })
  completed: boolean; 

  @Column({ type: 'text', nullable: true })
  comment?: string; 

  @ManyToOne(() => Habit, (habit) => habit.habitLogs, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'habit_id' })
  habit: Habit; 
}