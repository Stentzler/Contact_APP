import {Router} from 'express';
import {contactCreateController} from '../controllers/contacts/contactsCreate.controller';
import {contactsListController} from '../controllers/contacts/contactsList.controller';
import {authenticationMiddleware} from '../middlewares/authentication.middleware';

const contactRoutes = Router();

contactRoutes.post('', authenticationMiddleware, contactCreateController); //Token Required
contactRoutes.get('', authenticationMiddleware, contactsListController); //Token Required
contactRoutes.patch('/:id', authenticationMiddleware); //Token Required
contactRoutes.delete('/:id', authenticationMiddleware); //Token Required

export default contactRoutes;
