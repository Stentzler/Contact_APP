import {Request, Response} from 'express';
// import { userCreateService } from '../../services/users/userCreate.service';

const userCreateController = async (req: Request, res: Response) => {
	const {fullName, userName, email, password} = req.body;
	// const newUser = await userCreateService({
	// 	fullName,
	// 	userName,
	// 	email,
	// 	password,
	// });
	// return res.status(201).send(newUser);
};

export {userCreateController};
