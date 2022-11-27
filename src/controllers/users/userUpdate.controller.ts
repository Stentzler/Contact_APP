import {instanceToPlain} from 'class-transformer';
import {Request, response, Response} from 'express';
import {userUpdateService} from '../../services/users/userUpdate.service';

const userUpdateController = async (req: Request, res: Response) => {
	const {id} = req.user;
	const data = req.body;

	const updatedUser = await userUpdateService(id, data);

	return res.status(200).send(instanceToPlain(updatedUser));
};

export {userUpdateController};
