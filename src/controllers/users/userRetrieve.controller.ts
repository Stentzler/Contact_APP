import {Request, Response} from 'express';
import {instanceToPlain} from 'class-transformer';

const userRetrieveController = async (req: Request, res: Response) => {
	// const users = await userRetrieveService();
	// return res.status(200).send(instanceToPlain(users));
};

export {userRetrieveController};
