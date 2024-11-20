import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, CreateDateColumn } from 'typeorm';
import { User } from './user.entity';
import { HabitLog } from './habit-log.entity'; // Importa HabitLog

@Entity('habits')
export class Habit {
  @PrimaryGeneratedColumn()
  habit_id: number;

  @ManyToOne(() => User, (user) => user.user_id, { onDelete: 'CASCADE' })
  user: User;

  @Column({ length: 100 })
  habit_name: string;

  @Column({ nullable: true })
  description: string;

  @Column({ length: 50 })
  frequency: string;

  @CreateDateColumn()
  creation_date: Date;

  @Column()
  goal: number;

  @Column({ type: 'jsonb', nullable: true })
  notification: Record<string, any>;

  // Relación con HabitLog
  @OneToMany(() => HabitLog, (habitLog) => habitLog.habit, { cascade: true })
  habitLogs: HabitLog[];
}