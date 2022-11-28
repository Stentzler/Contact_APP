import {Router} from 'express';
import {contactCreateController} from '../controllers/contacts/contactsCreate.controller';
import {contactDeleteController} from '../controllers/contacts/contactsDelete.controller';
import {contactsListController} from '../controllers/contacts/contactsList.controller';
import {contactUpdateController} from '../controllers/contacts/contactsUpdate.controller';
import {authenticationMiddleware} from '../middlewares/authentication.middleware';
import {schemaValidatorMiddleware} from '../middlewares/schemaValidator.middleware';
import {contactSchema, contactUpdateSchema} from '../schemas/contacts.schema';

const contactRoutes = Router();

contactRoutes.post(
	'',
	authenticationMiddleware,
	schemaValidatorMiddleware(contactSchema),
	contactCreateController
); //Token Required

contactRoutes.patch(
	'/:id',
	authenticationMiddleware,
	schemaValidatorMiddleware(contactUpdateSchema),
	contactUpdateController
); //Token Required

contactRoutes.get('', authenticationMiddleware, contactsListController); //Token Required
contactRoutes.delete('/:id', authenticationMiddleware, contactDeleteController); //Token Required

export default contactRoutes;
