import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("cats")
export class Cat {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: "cat_name" })
    name: string;

    @Column({ name: "cat_age" })
    age: number;

    @Column({ name: "cat_breed" })
    breed: string;
}
