export {};

type JWTDecoded = {
	id: string;
};

declare global {
	namespace Express {
		export interface Request {
			user?: JWTDecoded;
		}
	}
}
