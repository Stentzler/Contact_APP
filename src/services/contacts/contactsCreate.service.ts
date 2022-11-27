import AppDataSource from '../../data-source';
import {Contacts} from '../../entities/contact.entities';
import {Users} from '../../entities/users.entities';
import {AppError} from '../../errors/AppError';
import {
	IContactRequest,
	IContactResponse,
} from '../../interfaces/contacts.interface';

const contactCreateService = async (
	contactData: IContactRequest,
	userId: string
): Promise<IContactResponse> => {
	const contactsRepository = AppDataSource.getRepository(Contacts);
	const usersRepository = AppDataSource.getRepository(Users);

	const user = await usersRepository.findOneBy({id: userId});

	if (!user) {
		throw new AppError('Invalid Token', 403);
	}

	try {
		const newContact = contactsRepository.create({
			...contactData,
			user,
		});
		await contactsRepository.save(newContact);

		const dataToReturn = {
			...newContact,
			user: {id: user.id, fullName: user.fullName, email: user.email},
		};

		return dataToReturn;
	} catch (error) {
		throw new AppError('Request has invalid properties', 422);
	}
};

export default contactCreateService;
