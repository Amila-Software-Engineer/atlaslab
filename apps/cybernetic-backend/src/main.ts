import express from 'express';
import appRouter from './routes';

import { mysqlDbConnection } from '@atlaslab/dbConnection'

mysqlDbConnection({
  host: process.env.HOST || 'localhost',
  user: process.env.USER || 'amila',
  password: process.env.PASSWORD || 'password',
  database: process.env.DATABASE || 'cybernetic-backend',
});


const app = express();


const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

// Middleware 
app.use(express.json());
// app.use()


app.use('/api/v1', appRouter);

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
