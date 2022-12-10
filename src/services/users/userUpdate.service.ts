import AppDataSource from '../../data-source';
import {Users} from '../../entities/users.entities';
import {AppError} from '../../errors/AppError';
import {IUserUpdate} from '../../interfaces/users.interface';
import bcrypt from 'bcryptjs';

const userUpdateService = async (
	id: string,
	data: IUserUpdate
): Promise<Users> => {
	const userRepository = AppDataSource.getRepository(Users);

	// Verify if provided id refers to an user
	const user = await userRepository.findOne({where: {id}});

	if (!user) {
		throw new AppError('User not found', 400);
	}

	// Verify if the new email is unique in the database
	if (data.email) {
		const emailAlreadyInUse = await userRepository.findOne({
			where: {email: data.email},
		});

		if (emailAlreadyInUse) {
			throw new AppError('Email already in use', 400);
		}
	}

	// Hash the new password if provided
	if (data.password) {
		data.password = bcrypt.hashSync(data.password, 10);
	}

	// Try to update the user
	try {
		await userRepository.update(user.id, {...user, ...data});
	} catch (error) {
		throw new AppError('Request has invalid properties', 422);
	}

	// Get updated user
	const updateduser = await userRepository.findOne({where: {id}});

	if (!updateduser) {
		throw new AppError('User not found', 404);
	}

	return updateduser;
};

export {userUpdateService};
