import { Sequelize } from 'sequelize';
import 'dotenv/config';

const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASS = process.env.DB_PASS;

export const db = new Sequelize('peduli_bumi', DB_USERNAME!, DB_PASS, {
	host: 'localhost',
	dialect: 'mysql',
	logging: false, // For disable logging SQL on console
});
