import {Request, Response} from 'express';
import {contactDeleteService} from '../../services/contacts/contactsDelete.service';

const contactDeleteController = async (req: Request, res: Response) => {
	const {id} = req.user;
	const {id: contactId} = req.params;

	await contactDeleteService(id, contactId);

	return res.status(204).send();
};

export {contactDeleteController};
