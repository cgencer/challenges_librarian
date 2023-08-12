import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import * as bodyParser from 'body-parser';
import helmet from 'helmet';
import * as methodOverride from 'method-override';
import * as morgan from 'morgan';
import dbInit from './database/db';

import { Environment, Config } from "./config/config.type";
const config: Config = require('./config/app-dev.json');

import { errorHandler } from "./helpers/error.mw";
import { notFoundHandler } from "./helpers/not-found.mw";

export default class App {

	protected app: express.Application;
	constructor(){
		new dbInit(config.db_uri);

		this.app = express();

		this.app.use(helmet());
		this.app.use(cors());
		this.app.use(bodyParser.json());
		this.app.use(bodyParser.urlencoded({ extended: true }))

		this.app.use(errorHandler);
		this.app.use(notFoundHandler);

		let { auth_route, user_route, post_route } = require('./routes');
		this.app.use('/api/v1/auth', auth_route);
		this.app.use('/api/v1/users', user_route);
		this.app.use('/api/v1/posts', post_route);

		this.app.listen(config.port, () => {
  			return console.log(`Express is listening at http://localhost:${config.port}`);
		});
	}
}