import * as yup from 'yup';

export const userSchema = yup
	.object()
	.shape({
		fullName: yup.string().required(),
		email: yup.string().required().email(),
		password: yup.string().required(),
		mobilePhone: yup.string().required(),
		phone: yup.string(),
	})
	.strict()
	.noUnknown();

export const userUpdateSchema = yup
	.object()
	.shape({
		fullName: yup.string(),
		email: yup.string().email(),
		password: yup.string(),
		mobilePhone: yup.string(),
		phone: yup.string(),
	})
	.strict()
	.noUnknown();
