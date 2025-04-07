import express from 'express';
import appRouter from './routes';


const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

// Middleware 
app.use(express.json());
// app.use()


app.use('/api/v1', appRouter);

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
