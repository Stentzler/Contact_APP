import {Request, Response} from 'express';
import {instanceToPlain} from 'class-transformer';
import {userLoginService} from '../../services/users/userLogin.service';

const userLoginController = async (req: Request, res: Response) => {
	const {email, password} = req.body;

	const userToken = await userLoginService({email, password});

	return res.status(200).send(instanceToPlain(userToken));
};

export {userLoginController};
