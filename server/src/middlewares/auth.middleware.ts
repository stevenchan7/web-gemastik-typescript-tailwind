import { Request, Response, NextFunction, RequestHandler } from 'express';
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import { User } from '../models/user.model';
import { Community } from '../models/community.model';
import { UserTable, CommunityTable } from '../types/table.type';

export type TypedUser = {
	username: string;
	email: string;
	password: string;
	role: string;
};
export interface TypedRequestBodyUser<T> extends Request {
	body: T;
}

export const checkDuplicateUsernameOrEmail = async (req: TypedRequestBodyUser<TypedUser>, res: Response, next: NextFunction) => {
	try {
		const { username, email, role } = req.body;
		let user: UserTable | CommunityTable | null;

		if (role === 'volunteer') {
			// Find username
			user = await User.findOne({
				where: {
					username: username,
				},
			});
			// Send error if user exist
			if (user) {
				return res.status(403).json({ success: false, msg: 'Username already used' });
			}
			// Find user by email
			user = await User.findOne({
				where: {
					email: email,
				},
			});
			// Send error if user exist
			if (user) {
				return res.status(403).json({ success: false, msg: 'Email already used' });
			}
		} else {
			// Find username
			user = await Community.findOne({
				where: {
					username: username,
				},
			});
			// Send error if user exist
			if (user) {
				return res.status(403).json({ success: false, msg: 'Username already used' });
			}
			// Find user by email
			user = await Community.findOne({
				where: {
					email: email,
				},
			});
			// Send error if user exist
			if (user) {
				return res.status(403).json({ success: false, msg: 'Email already used' });
			}
		}
		// Continue if no problem
		next();
	} catch (err) {
		console.log(err);
	}
};

const JWT_SECRET = process.env.JWT_SECRET; // JWT secret key
interface JWTDecodedInterface {
	id: string;
}

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
	let token: string;
	// Get token from session object
	if (req.session) {
		token = req.session.token;
		// Verify token
		jwt.verify(token, JWT_SECRET!, (err, decoded) => {
			if (err) {
				return res.status(401).json({ success: false, err: err });
			}
			console.log('Decoded result: ', decoded);
			// Attach user object to request and assign it with id
			if (decoded) {
				req.user = {
					id: (decoded as JWTDecodedInterface).id,
				};
				console.log('user data', req.user);
				next();
			}
		});
	}
};

export const verifyTokenCommunity = (req: Request, res: Response, next: NextFunction) => {
	let token: string;

	if (req.session) {
		token = req.session.token;

		jwt.verify(token, JWT_SECRET!, (err, decoded) => {
			if (err) {
				return res.status(401).json({ success: false, err: err });
			}

			const userId = (decoded as JWTDecodedInterface).id;

			Community.findByPk(userId)
				.then((user) => {
					if (!user) {
						return res.status(401).json({ success: false, msg: 'Unauthorized' });
					}
					req.user = user;
					next();
				})
				.catch((err) => {
					console.log(err);
				});
		});
	}
};
