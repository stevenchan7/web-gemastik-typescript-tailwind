import express, { Express, Request, Response} from 'express'

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello Worlddddd')
})

const PORT = 5000
app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
})