import {
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn,
} from 'typeorm';
import {Exclude} from 'class-transformer';

@Entity('users')
class Users {
	@PrimaryGeneratedColumn('uuid')
	readonly id: string;

	@Column({length: 60})
	fullName: string;

	@Column({length: 60, unique: true})
	email: string;

	@Column({length: 156})
	@Exclude()
	password: string;

	@Column({length: 15})
	mobilePhone: string;

	@Column({length: 20, nullable: true})
	phone: string;

	@Column({default: true})
	isActive: boolean;

	@CreateDateColumn()
	createdAt: Date;
}

export {Users};
