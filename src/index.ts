import * as express from 'express';

import users from './routes/users';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// routes
app.get('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.send('Welcome to this API');
});
app.use('/users', users);

app.listen(port);