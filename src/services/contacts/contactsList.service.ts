import AppDataSource from '../../data-source';
import {Contacts} from '../../entities/contact.entities';
import {Users} from '../../entities/users.entities';
import {AppError} from '../../errors/AppError';

const contactsListService = async (userId: string): Promise<Contacts[]> => {
	const contactsRepository = AppDataSource.getRepository(Contacts);
	const usersRepository = AppDataSource.getRepository(Users);

	const user = await usersRepository.findOneBy({id: userId});

	if (!user) {
		throw new AppError('Invalid token', 403);
	}

	const contactsArray = contactsRepository.find({where: {user: user}});

	return contactsArray;
};

export {contactsListService};
