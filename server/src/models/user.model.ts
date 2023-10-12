import { DataTypes } from 'sequelize';
import { db } from '../config/database.config';
import { UserTable } from '../types/table.type';

export const User = db.define<UserTable>('user', {
	id: {
		primaryKey: true,
		type: DataTypes.UUID,
		defaultValue: DataTypes.UUIDV4,
		allowNull: false,
	},
	username: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			len: {
				args: [5, 25],
				msg: 'require 5 characters minimum',
			},
			is: {
				args: /^[a-zA-z0-9]\w+$/,
				msg: 'must start with letter or number',
			},
		},
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			isEmail: true,
		},
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false,
	},
});
