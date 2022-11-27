import {Request, Response} from 'express';
import {userDeleteService} from '../../services/users/userDelete.service';

const userSoftDeleteController = async (req: Request, res: Response) => {
	const {id} = req.user;

	await userDeleteService(id);

	return res.status(204).send();
};

export {userSoftDeleteController};
