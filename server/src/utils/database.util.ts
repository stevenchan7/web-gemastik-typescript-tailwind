import { Sequelize } from 'sequelize';
import { Event } from '../models/event.model';
import { Community } from '../models/community.model';
import { Activity } from '../models/activitiy.model';
import { User } from '../models/user.model';
import { Participant } from '../models/participant.model';

export async function authenticateDB(db: Sequelize) {
	try {
		// Relations between entities
		Community.hasMany(Event);
		Event.belongsTo(Community);

		Activity.hasMany(Event);
		Event.belongsTo(Activity);

		Event.belongsToMany(User, { through: Participant });
		User.belongsToMany(Event, { through: Participant });

		await db.authenticate();
		await db.sync({ alter: true }); // sync table
		console.log('Connected to database successfully...');
	} catch (err) {
		console.log('Failed to connect to database...', err);
		throw new Error();
	}
}
