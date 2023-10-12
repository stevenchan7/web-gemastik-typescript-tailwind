import express, { Express, Request, Response } from 'express';
import 'dotenv/config';
import cors from 'cors';
import cookieSession from 'cookie-session';
import { db } from './config/database.config';
import { authenticateDB } from './utils/database.util';
import { User } from './models/user.model';
// Routes
import authRouter from './routes/auth.route';
import communityRouter from './routes/community.route';
// Middlewares
import { verifyToken } from './middlewares/auth.middleware';
import { Activity } from './models/activitiy.model';

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

app.get('/verifytoken-test', verifyToken, (req, res) => {
	res.status(200).send(req.user?.id);
});

app.post('/create-activities', (req, res) => {
	Activity.create({
		title: 'Peduli Pantai',
		desc: 'Peduli pantai adalah salah satu kegiatan dari Peduli Bumi yang bertujuan menjaga ekosistem pesisir pantai agar tetap lestari demi menjaga keindahan alam dan ekosistem di dalamnya',
	});
	res.send('Berhasil dibuat');
});

// Auth endpoints
app.use('/auth', authRouter);

// Community endpoints
app.use('/community', communityRouter);

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
