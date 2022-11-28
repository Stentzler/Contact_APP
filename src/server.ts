import app from './app';
import AppDataSource from './data-source';

const PORT = process.env.PORT || 3001;

(async () => {
	await AppDataSource.initialize().catch((err: Error) => {
		console.error('Error during Data Source initialization', err);
	});

	app.listen(PORT, () => {
		console.log(`Server running PORT:${PORT}`);
	});
})();
