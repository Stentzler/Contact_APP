import {DataSource} from 'typeorm';
import 'dotenv/config';

const AppDataSource = new DataSource(
	process.env.NODE_ENV === 'test'
		? {
				type: 'sqlite',
				database: ':memory:',
				synchronize: true,
				entities: ['src/entities/*.ts'],
		  }
		: {
				type: 'postgres',
				port: 5432,
				username: process.env.POSTGRES_USER,
				password: process.env.POSTGRES_PASSWORD,
				database: process.env.POSTGRES_DB,
				host: process.env.DB_HOST,
				synchronize: false,
				logging: true,
				entities: ['src/entities/*.ts'],
				migrations: ['src/migrations/*.ts'],
		  }
);

export default AppDataSource;
