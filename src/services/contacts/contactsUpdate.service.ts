import AppDataSource from '../../data-source';
import {Contacts} from '../../entities/contact.entities';
import {Users} from '../../entities/users.entities';
import {AppError} from '../../errors/AppError';
import {IContactUpdate} from '../../interfaces/contacts.interface';

interface UpdateContact {
	userId: string;
	contactId: string;
	data: IContactUpdate;
}

const contactUpdateService = async ({
	userId,
	contactId,
	data,
}: UpdateContact) => {
	const userRepository = AppDataSource.getRepository(Users);
	const contactRepository = AppDataSource.getRepository(Contacts);

	const isValidUUID = contactId.match(
		/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i
	);

	if (!isValidUUID) {
		throw new AppError('Provide a valid ID', 400);
	}

	const user = await userRepository.findOne({where: {id: userId}});
	const contactToUpdate = await contactRepository.findOne({
		where: {id: contactId},
		relations: {user: true},
	});

	if (!user || !contactToUpdate) {
		throw new AppError('Invalid Token or provided ID', 403);
	}

	if (contactToUpdate.user.id !== user.id) {
		throw new AppError('You have no permission to delete this contact', 403);
	}

	try {
		await contactRepository.update(contactToUpdate.id, {
			...contactToUpdate,
			...data,
		});
	} catch (error) {
		throw new AppError('Request has invalid properties', 422);
	}

	const updatedContact = await contactRepository.findOneBy({id: contactId});

	return updatedContact;
};

export {contactUpdateService};
