import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {Users} from './users.entities';

@Entity('contacts')
class Contacts {
	@PrimaryGeneratedColumn('uuid')
	readonly id: string;

	@Column({length: 60})
	fullName: string;

	@Column({length: 60})
	email: string;

	@Column({length: 15})
	mobilePhone: string;

	@Column({length: 20, nullable: true})
	phone: string;

	@ManyToOne(() => Users)
	user: Users;
}

export {Contacts};
