import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import NotificationsController from "./controllers/NotificationsController";
var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

app.post('/*', (req, res) => {
  NotificationsController.handleRequest(req, res)
})

export default app;