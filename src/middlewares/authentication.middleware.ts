import {Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import {AppError} from '../errors/AppError';

const authenticationMiddleware = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const {authorization} = req.headers;

	const token = authorization?.split(' ')[1];

	if (!token)
		return res.status(401).json({message: 'Missing authorization token'});

	jwt.verify(
		token,
		process.env.SECRET_KEY as string,
		(error: any, decoded: any) => {
			if (error) {
				throw new AppError('Token is either expired or invalid', 401);
			}

			req.user = {
				isActive: decoded.isActive,
				id: decoded.id,
			};

			next();
		}
	);
};

export {authenticationMiddleware};
