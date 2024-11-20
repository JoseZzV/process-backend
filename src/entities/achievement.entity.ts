import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { User } from './user.entity';

@Entity('achievements')
export class Achievement {
  @PrimaryGeneratedColumn()
  achievement_id: number;

  @ManyToOne(() => User, (user) => user.user_id, { onDelete: 'CASCADE' })
  user: User;

  @Column({ length: 100 })
  achievement_type: string;

  @CreateDateColumn()
  achievement_date: Date;
}