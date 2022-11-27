import AppDataSource from '../../data-source';
import {Users} from '../../entities/users.entities';
import {AppError} from '../../errors/AppError';

const userRetrieveService = async (id: string): Promise<Users> => {
	const userRepository = AppDataSource.getRepository(Users);

	const user = await userRepository.findOne({where: {id}});

	if (!user) {
		throw new AppError('User not found', 404);
	}

	return user;
};

export {userRetrieveService};
