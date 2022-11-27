import AppDataSource from '../../data-source';
import {Contacts} from '../../entities/contact.entities';
import {Users} from '../../entities/users.entities';
import {AppError} from '../../errors/AppError';

const contactDeleteService = async (userId: string, contactId: string) => {
	const userRepository = AppDataSource.getRepository(Users);
	const contactRepository = AppDataSource.getRepository(Contacts);

	const isValidUUID = contactId.match(
		/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i
	);

	if (!isValidUUID) {
		throw new AppError('Provide a valid ID', 400);
	}

	const user = await userRepository.findOne({where: {id: userId}});
	const contactToDelete = await contactRepository.findOne({
		where: {id: contactId},
		relations: {user: true},
	});

	if (!user || !contactToDelete) {
		throw new AppError('Invalid Token or provided ID', 403);
	}

	if (contactToDelete.user.id !== user.id) {
		throw new AppError('You have no permission to delete this contact', 403);
	}

	try {
		await contactRepository.delete(contactId);
	} catch (error) {
		throw new AppError('Request has invalid properties', 422);
	}
};

export {contactDeleteService};
