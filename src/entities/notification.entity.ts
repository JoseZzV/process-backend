import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user.entity';
import { Habit } from './habit.entity';

@Entity('notifications')
export class Notification {
  @PrimaryGeneratedColumn()
  notification_id: number;

  @ManyToOne(() => User, (user) => user.user_id, { onDelete: 'CASCADE' })
  user: User;

  @ManyToOne(() => Habit, (habit) => habit.habit_id, { nullable: true, onDelete: 'CASCADE' })
  habit: Habit;

  @Column({ length: 50 })
  frequency: string;

  @Column({ type: 'time' })
  send_time: string;

  @Column({ default: true })
  active: boolean;
}