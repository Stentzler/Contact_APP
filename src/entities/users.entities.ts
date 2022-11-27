import {
	Column,
	CreateDateColumn,
	Entity,
	OneToMany,
	PrimaryGeneratedColumn,
} from 'typeorm';
import {Exclude} from 'class-transformer';
import {Contacts} from './contact.entities';

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

	@OneToMany(() => Contacts, contact => contact.user)
	contacts: Contacts[];
}

export {Users};
