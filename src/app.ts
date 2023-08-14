import express, { Express, Request, Response } from 'express';
import cors from 'cors';
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
		console.log(':::-----------------------');
		console.log('::: Environment is: ' + process.env.ENV);
		console.log(':::-----------------------');
		dbInit.init(config.db_uri);

		this.app = express();

		this.app.use(helmet());
		this.app.use(cors());
		this.app.use(express.json({ limit: '50mb', type: 'application/json' }));
		this.app.use(express.urlencoded());

		this.app.use(errorHandler);
		this.app.use(notFoundHandler);

		this.app.use('/', routes);

		this.app.listen(config.port, () => {
  			return console.log(`::: the API is avail@ http://localhost:${config.port}`);
		});
	}
}
new App();