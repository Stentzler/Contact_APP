import {Request, Response} from 'express';
import {contactUpdateService} from '../../services/contacts/contactsUpdate.service';

const contactUpdateController = async (req: Request, res: Response) => {
	const {id: userId} = req.user;
	const {id: contactId} = req.params;
	const data = req.body;

	const updatedContact = await contactUpdateService({userId, contactId, data});

	return res.status(200).send(updatedContact);
};

export {contactUpdateController};
