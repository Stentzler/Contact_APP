import {Request, Response} from 'express';
import {contactsListService} from '../../services/contacts/contactsList.service';

const contactsListController = async (req: Request, res: Response) => {
	const {id} = req.user;

	const contacts = await contactsListService(id);

	return res.status(200).send(contacts);
};

export {contactsListController};
