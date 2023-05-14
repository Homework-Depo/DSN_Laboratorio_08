import express from 'express';
import { default as ProductRouter } from './routes/Product';
import mongoose from './config/database';
import path from 'path';

mongoose.connect

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.disable('x-powered-by');

app.use('/', ProductRouter);

export default app;