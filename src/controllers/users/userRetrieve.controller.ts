import {Request, Response} from 'express';
import {instanceToPlain} from 'class-transformer';
import {userRetrieveService} from '../../services/users/userRetrieve.service';

const userRetrieveController = async (req: Request, res: Response) => {
	const {id} = req.user;

	const user = await userRetrieveService(id);
	return res.status(200).send(instanceToPlain(user));
};

export {userRetrieveController};
