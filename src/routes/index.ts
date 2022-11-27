import {Express} from 'express';
import contactRoutes from './contacts.routes';
import userRoutes from './users.routes';

export const appRoutes = (app: Express) => {
	app.use('/users', userRoutes);
	app.use('/users/contacts', contactRoutes);
};
