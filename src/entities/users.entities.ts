import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('users')
class Users {
	@PrimaryGeneratedColumn('uuid')
	readonly id: string;

	@Column({length: 60})
	fullName: string;

	@Column({length: 60, unique: true})
	email: string;

	@Column({length: 15})
	mobilePhone: string;

	@Column({length: 20, nullable: true})
	phone: string;

	@Column({default: true})
	isActive: boolean;
}

export {Users};
