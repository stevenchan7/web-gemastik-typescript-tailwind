import { Sequelize } from 'sequelize';

export async function authenticateDB(db: Sequelize) {
	try {
		await db.authenticate();
		await db.sync(); // sync table
		console.log('Connected to database successfully...');
	} catch (err) {
		console.log('Failed to connect to database...', err);
		throw new Error();
	}
}
