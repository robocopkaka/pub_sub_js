import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import topics from "./routes/topics";
import subscriptions from './routes/subscriptions';
import publish from './routes/publish';
var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use('/topics', topics);
app.use('/subscribe', subscriptions);
app.use('/publish', publish);

export default app;