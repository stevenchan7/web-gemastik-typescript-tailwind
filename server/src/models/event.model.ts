import { InferAttributes, InferCreationAttributes, Model, CreationOptional, DataTypes } from 'sequelize';
import { db } from '../config/database.config';

interface EventModel extends Model<InferAttributes<EventModel>, InferCreationAttributes<EventModel>> {
	id: CreationOptional<string>;
	title: string;
	date: string;
	venue: string;
	// Association
	activityId?: string;
	communityId?: string;
}

export const Event = db.define<EventModel>('event', {
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
});
