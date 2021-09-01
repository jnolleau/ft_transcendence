import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
// import { BaseEntity } from './base.entity';

@Entity("jobs")
export class JobsEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    details: string;
}

