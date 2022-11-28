import {Router} from 'express';
import {userCreateController} from '../controllers/users/userCreate.controller';
import {usersListController} from '../controllers/users/userList.controller';
import {userLoginController} from '../controllers/users/userLogin.controller';
import {userRetrieveController} from '../controllers/users/userRetrieve.controller';
import {userSoftDeleteController} from '../controllers/users/userSoftDelete';
import {userUpdateController} from '../controllers/users/userUpdate.controller';
import {authenticationMiddleware} from '../middlewares/authentication.middleware';
import {schemaValidatorMiddleware} from '../middlewares/schemaValidator.middleware';
import {userSchema, userUpdateSchema} from '../schemas/user.schema';

const userRoutes = Router();

userRoutes.post('/login', userLoginController);
userRoutes.get('/all', usersListController);

userRoutes.post(
	'',
	schemaValidatorMiddleware(userSchema),
	userCreateController
);

userRoutes.get('', authenticationMiddleware, userRetrieveController); //Token Required

userRoutes.patch(
	'',
	schemaValidatorMiddleware(userUpdateSchema),
	authenticationMiddleware,
	userUpdateController
); //Token Required

userRoutes.delete('', authenticationMiddleware, userSoftDeleteController); //Token Required

export default userRoutes;
