import bcrypt from 'bcrypt';
import AppDataSource from '../../data-source';
import {Users} from '../../entities/users.entities';
import {AppError} from '../../errors/AppError';
import {IUserRequest, IUserResponse} from '../../interfaces/users.interface';

const userCreateService = async (
	userData: IUserRequest
): Promise<IUserResponse> => {
	const {email, password} = userData;
	const userRepository = AppDataSource.getRepository(Users);

	// Check if email is already being used
	const emailAlreadyInUse = await userRepository.findOne({where: {email}});
	if (emailAlreadyInUse) {
		throw new AppError('Email already in use', 400);
	}

	userData.password = bcrypt.hashSync(password, 10);

	const newUser = userRepository.create({
		...userData,
	});

	await userRepository.save(newUser);

	const {password: undefined, ...rest} = newUser;

	return rest;
};

export default userCreateService;
