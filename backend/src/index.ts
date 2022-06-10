import express, { Express, Request, Response } from 'express';
import { graphqlHTTP } from 'express-graphql';
const schema = require('./graphql/schemas/schema');
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: process.env.NODE_ENV === 'development',
}));

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});
