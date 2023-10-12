import { Request, Response } from 'express';
import { Event } from '../models/event.model';

type PostEventRequestBody = {
	title: string;
	date: string;
	venue: string;
};

interface PostEventRequest<T> extends Request {
	body: T;
}

export const postEvent = (req: PostEventRequest<PostEventRequestBody>, res: Response) => {
	const { activityId } = req.params;
	const { title, date, venue } = req.body;
	Event.create({
		title: title,
		date: date,
		venue: venue,
		activityId: activityId,
		communityId: req.user?.id,
	})
		.then((event) => {
			res.status(200).json({ success: true, data: event });
		})
		.catch((err) => {
			console.log(err);
			res.status(400).send('Error creating event');
		});
};
