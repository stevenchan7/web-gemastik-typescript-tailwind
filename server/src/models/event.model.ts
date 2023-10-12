import { DataTypes } from 'sequelize';
import { db } from '../config/database.config';
import { EventTable } from '../types/table.type';

export const Event = db.define<EventTable>('event', {
	id: {
		primaryKey: true,
		type: DataTypes.UUID,
		defaultValue: DataTypes.UUIDV4,
		allowNull: false,
	},
	title: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	date: {
		type: DataTypes.DATEONLY,
		allowNull: false,
	},
	venue: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	quota: {
		type: DataTypes.INTEGER,
		allowNull: false,
		defaultValue: 0,
	},
});
