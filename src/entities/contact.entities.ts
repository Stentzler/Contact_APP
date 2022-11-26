import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

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
}

export {Contacts};
