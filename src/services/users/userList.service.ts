import AppDataSource from '../../data-source';
import {Users} from '../../entities/users.entities';

const userListService = async (): Promise<Users[]> => {
	const userRepository = AppDataSource.getRepository(Users);

	const usersArray = userRepository.find();

	return usersArray;
};

export {userListService};
