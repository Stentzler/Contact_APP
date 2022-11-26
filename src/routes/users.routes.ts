import {Router} from 'express';
import {userCreateController} from '../controllers/users/userCreate.controller';
import {usersListController} from '../controllers/users/userList.controller';
import {userRetrieveController} from '../controllers/users/userRetrieve.controller';
import {userSoftDeleteController} from '../controllers/users/userSoftDelete';
import {userUpdateController} from '../controllers/users/userUpdate.controller';

const userRoutes = Router();

userRoutes.post('/login');
userRoutes.get('', usersListController);
userRoutes.post('', userCreateController);
userRoutes.get('/:id', userRetrieveController);
userRoutes.patch('/:id', userUpdateController);
userRoutes.delete('/:id', userSoftDeleteController);

export default userRoutes;
