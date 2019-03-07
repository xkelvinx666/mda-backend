import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Length, IsEmail } from 'class-validator';

@Entity()
export class FieldType {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 20
    })
    @Length(1, 8)
    key: string;

    @Column({
        length: 20
    })
    @Length(5, 12)
    name: string;

    @Column({
        length: 100
    })
    @Length(10, 100)
    @IsEmail()
    email: string;
}
