import {Request, Response} from 'express';
import {userListService} from '../../services/users/userList.service';
import {instanceToPlain} from 'class-transformer';

const usersListController = async (req: Request, res: Response) => {
	const users = await userListService();

	return res.status(200).send(instanceToPlain(users));
};

export {usersListController};
