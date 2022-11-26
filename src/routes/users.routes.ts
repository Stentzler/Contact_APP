import {Router} from 'express';

const userRoutes = Router();

userRoutes.post('/login');
userRoutes.get('');
userRoutes.post('');
userRoutes.patch('/:id');
userRoutes.delete('/:id');

export default userRoutes;
