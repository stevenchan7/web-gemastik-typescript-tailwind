import { DataTypes } from 'sequelize';
import { db } from '../config/database.config';
import { ParticipantTable } from '../types/table.type';

export const Participant = db.define<ParticipantTable>('participant', {
	id: {
		type: DataTypes.UUID,
		defaultValue: DataTypes.UUIDV4,
		allowNull: false,
		primaryKey: true,
	},
});
