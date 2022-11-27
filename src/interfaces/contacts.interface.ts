import {Users} from '../entities/users.entities';

export interface IContactRequest {
	fullName: string;
	email: string;
	mobilePhone: string;
	phone?: string;
}

export interface IContactResponse {
	id: string;
	fullName: string;
	email: string;
	mobilePhone: string;
	phone?: string;
	user: {
		email: string;
		fullName: string;
		id: string;
	};
}
