import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Length, IsEmail } from 'class-validator';
import { Field } from '../../field/entity/field';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 80
    })
    @Length(5, 12)
    name: string;

    @Column({
        length: 100
    })
    @Length(10, 100)
    @IsEmail()
    email: string;
    @OneToMany(type => Field, field => field.user)
    fields: Field[];
}