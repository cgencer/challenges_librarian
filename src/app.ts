import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import * as bodyParser from 'body-parser';
import helmet from 'helmet';
import * as methodOverride from 'method-override';
import * as morgan from 'morgan';
import dbInit from './database/db.js';
import { Sequelize } from 'sequelize';

import { Environment, Config } from "./config/config.type";

import { config } from './config/config.js';

import { errorHandler } from "./helpers/error.mw.js";
import { notFoundHandler } from "./helpers/not-found.mw.js";
import { Router } from 'express';
import routes from './routes/index.js';

export default class App {

	protected app: express.Application;

	constructor(){
		dbInit.init(config.db_uri);

		this.app = express();

		this.app.use(helmet());
		this.app.use(cors());
		this.app.use(bodyParser.json({ limit: '50mb', type: 'application/json' }));
		this.app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

		this.app.use(errorHandler);
		this.app.use(notFoundHandler);

		this.app.use('/', routes);

		this.app.listen(3000, () => {
  			return console.log(`Express is listening at http://localhost:3000`);
		});
	}
}