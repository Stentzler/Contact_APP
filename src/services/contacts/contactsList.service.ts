import AppDataSource from '../../data-source';
import {Contacts} from '../../entities/contact.entities';
import {Users} from '../../entities/users.entities';
import {AppError} from '../../errors/AppError';

const contactsListService = async (userId: string): Promise<Contacts[]> => {
	const usersRepository = AppDataSource.getRepository(Users);

	const user = await usersRepository.findOne({
		where: {id: userId},
		relations: {contacts: true},
	});

	if (!user) {
		throw new AppError('Invalid token', 403);
	}

	return user.contacts;
};

export {contactsListService};
