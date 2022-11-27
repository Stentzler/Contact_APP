import AppDataSource from '../../data-source';
import {Users} from '../../entities/users.entities';
import {AppError} from '../../errors/AppError';

const userDeleteService = async (id: string) => {
	const userRepository = AppDataSource.getRepository(Users);
	const user = await userRepository.findOne({where: {id}});

	if (!user) {
		throw new AppError('User not found', 404);
	}

	try {
		user.isActive = false;
		await userRepository.update(user.id, {...user});
	} catch (error) {
		throw new AppError('Request has invalid properties', 422);
	}
};

export {userDeleteService};
