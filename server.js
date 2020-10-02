import express from 'express';
import chalk from 'chalk';
import logger from 'morgan';
import path from 'path';
import debugLib from 'debug';
import routes from './routes';

const app = express();
const port = 3000;
const debug = debugLib('app:server');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

Object.entries(routes).forEach(([route, router]) => {
  app.use(route, router);
});

app.listen(port, () => debug(`App running on port ${chalk.blue(port)}`));
