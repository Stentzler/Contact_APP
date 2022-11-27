export interface IUserRequest {
	fullName: string;
	email: string;
	password: string;
	mobilePhone: string;
	phone?: string;
}

export interface IUserResponse {
	id: string;
	fullName: string;
	email: string;
	mobilePhone: string;
	phone?: string;
	isActive: boolean;
	createdAt: Date;
}

export interface IUserUpdate {
	fullName?: string;
	email?: string;
	password?: string;
	mobilePhone?: string;
	phone?: string;
}

export interface IUserLogin {
	email: string;
	password: string;
}

export interface IUserTokenResponse {
	token: string;
}
