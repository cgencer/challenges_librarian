import express, { Express, Router, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dbInit from './database/db.js';
import { Sequelize } from 'sequelize';
import compression from 'compression';

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import rfs from 'rotating-file-stream';

import { config, policies } from './config/config.js';

import { errorHandler } from "./helpers/error.mw.js";
import { notFoundHandler } from "./helpers/not-found.mw.js";
import routes from './routes/index.js';

// FIX for __dirname is not defined in ES module scope
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default class App {

	protected app: express.Application;

	constructor(){
		console.log(':::--------------------------------');
		console.log('::: Environment is: ' + process.env.ENV);
		console.log(':::--------------------------------');
		dbInit.init(config.db_uri);

		this.app = express();

		this.app.use(compression());

		if (config.content_security === true) {
			this.app.use(helmet.contentSecurityPolicy({
				useDefaults: true,
				directives: policies.contentSecurities
			}));
		}
		if (config.referrers === true) {
			this.app.use(helmet.referrerPolicy({
				policy: policies.referrers,
			}));
		}
		this.app.use(cors());
		this.app.use(express.json({ limit: '50mb', type: 'application/json' }));
		this.app.use(express.urlencoded());

		var accessLogStream = rfs.createStream('access.log', {
			interval: '1d', // rotate daily
			path: path.join(__dirname, '../log')
		});
		if (config.logs === true) {
			console.log(':::--------------------------------');
			console.log('::: logfile is at: logs/access.log');
			console.log(':::--------------------------------');
			this.app.use(morgan('tiny', { stream: accessLogStream }))
		}
		this.app.use(errorHandler);
		this.app.use(notFoundHandler);

		this.app.use('/', routes);

		this.app.listen(config.port, () => {
  			return console.log(`::: the API is avail@ http://localhost:${config.port}`);
		});
	}
}
new App();