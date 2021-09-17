import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity("users")
export class Users {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @Column()
    password: string;

    @Column()
    salt: string;
}

