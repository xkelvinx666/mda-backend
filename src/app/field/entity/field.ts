import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Length } from 'class-validator';
import { User } from '../../user/entity/user';

@Entity()
export class Field {
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

    @ManyToOne(type => User, user => user.fields)
    user: User;
}
