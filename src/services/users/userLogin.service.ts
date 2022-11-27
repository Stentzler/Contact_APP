import AppDataSource from '../../data-source';
import {AppError} from '../../errors/AppError';
import {Users} from '../../entities/users.entities';
import {IUserLogin, IUserTokenResponse} from '../../interfaces/users.interface';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

const userLoginService = async ({
	email,
	password,
}: IUserLogin): Promise<IUserTokenResponse> => {
	const userRepository = AppDataSource.getRepository(Users);

	const user = await userRepository.findOne({where: {email}});

	if (!user) {
		throw new AppError('Invalid email or password', 400);
	}
	if (user.isActive === false) {
		throw new AppError('User is not active', 403);
	}

	const passwordMatch = bcrypt.compareSync(password, user.password);
	if (!passwordMatch) {
		throw new AppError('Invalid email or password', 400);
	}

	const token = jwt.sign(
		{id: user.id, isRestaurant: user.isActive},
		process.env.SECRET_KEY as string,
		{
			expiresIn: '4h',
		}
	);

	return {token: token};
};

export {userLoginService};
