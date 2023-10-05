import { DataTypes } from 'sequelize';
import { db } from '../config/database.config';

export const Activity = db.define('activity', {
	id: {
		type: DataTypes.UUID,
		defaultValue: DataTypes.UUIDV4,
		allowNull: false,
		primaryKey: true,
	},
	title: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	desc: {
		type: DataTypes.TEXT,
		allowNull: false,
	},
});
