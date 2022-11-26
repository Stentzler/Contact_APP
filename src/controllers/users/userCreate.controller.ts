import {Request, Response} from 'express';
import {IUserRequest} from '../../interfaces/users.interface';
import userCreateService from '../../services/users/userCreate.service';

const userCreateController = async (req: Request, res: Response) => {
	const {fullName, email, password, mobilePhone, phone}: IUserRequest =
		req.body;

	const newUser = await userCreateService({
		fullName,
		email,
		password,
		mobilePhone,
		phone,
	});

	return res.status(201).send(newUser);
};

export {userCreateController};
