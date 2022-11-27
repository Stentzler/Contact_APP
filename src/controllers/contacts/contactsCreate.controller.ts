import {Request, Response} from 'express';
import {IContactRequest} from '../../interfaces/contacts.interface';
import contactCreateService from '../../services/contacts/contactsCreate.service';

const contactCreateController = async (req: Request, res: Response) => {
	const {fullName, email, mobilePhone, phone}: IContactRequest = req.body;
	const {id} = req.user;

	const newContact = await contactCreateService(
		{
			fullName,
			email,
			mobilePhone,
			phone,
		},
		id
	);

	return res.status(201).send(newContact);
};

export {contactCreateController};
