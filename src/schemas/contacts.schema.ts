import * as yup from 'yup';

export const contactSchema = yup
	.object()
	.shape({
		fullName: yup.string().required(),
		email: yup.string().required().email(),
		mobilePhone: yup.string().required(),
		phone: yup.string(),
	})
	.strict()
	.noUnknown();

export const contactUpdateSchema = yup
	.object()
	.shape({
		fullName: yup.string(),
		email: yup.string().email(),
		mobilePhone: yup.string(),
		phone: yup.string(),
	})
	.strict()
	.noUnknown();
