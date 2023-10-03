import express, { Express, Request, Response } from 'express';
import 'dotenv/config';
import cors from 'cors';
import cookieSession from 'cookie-session';
import { db } from './config/database.config';
import { authenticateDB } from './utils/database.util';
import { User } from './models/user.model';
// Routes
import registRouter from './routes/register.route';
import loginRouter from './routes/login.route';
import logoutRouter from './routes/logout.route';
// Middlewares
import { verifyToken } from './middlewares/auth.middleware';

const app: Express = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// cors
const corsOptions: cors.CorsOptions = {
	origin: true,
	credentials: true,
};
app.use(cors(corsOptions));
// cookie session
app.use(
	cookieSession({
		name: 'session',
		keys: [process.env.KEY1!, process.env.KEY2!],
	})
);

// Endpoints
app.get('/', (req: Request, res: Response) => {
	res.send('Hello Worlddddd');
});
app.use('/register', registRouter);
app.use('/login', loginRouter);
app.use('/signout', logoutRouter);
app.get('/verifytoken-test', verifyToken, (req, res) => {
	res.status(200).send(req.user?.id);
});

// PORT AND DB CONNECTION
const PORT = process.env.PORT;
// Database connection
// Call db from config and authentication function from utils folder
authenticateDB(db)
	.then(() => {
		app.listen(PORT, () => {
			console.log(`App is running on port ${PORT}`);
		});
	})
	.catch((err) => {
		console.log(err);
	});
