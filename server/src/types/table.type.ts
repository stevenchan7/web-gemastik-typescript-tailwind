import { Model, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';

export interface ParticipantTable extends Model<InferAttributes<ParticipantTable>, InferCreationAttributes<ParticipantTable>> {
	id: CreationOptional<string>;
}

export interface UserTable extends Model<InferAttributes<UserTable>, InferCreationAttributes<UserTable>> {
	id: CreationOptional<string>;
	username: string;
	email: string;
	password: string;
}

export interface CommunityTable extends Model<InferAttributes<CommunityTable>, InferCreationAttributes<CommunityTable>> {
	id: CreationOptional<string>;
	username: string;
	email: string;
	password: string;
}

export interface EventTable extends Model<InferAttributes<EventTable>, InferCreationAttributes<EventTable>> {
	id: CreationOptional<string>;
	title: string;
	date: string;
	venue: string;
	quota: CreationOptional<number>;
	// Association
	activityId?: string;
	communityId?: string;
}
