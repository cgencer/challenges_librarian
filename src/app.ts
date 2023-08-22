import express, { Express, Request, Response, Router } from 'express';
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
import { authRoutes } from './routes/auth.js';
import { userRoutes } from './routes/user.js';
import { contentRoutes } from './routes/content.js';

import { errorHandler } from "./helpers/error.mw.js";
import { notFoundHandler } from "./helpers/not-found.mw.js";
//import routes from './routes/index.js';

export default class App {

	protected app: express.Application;

	constructor(){
		console.log(':::--------------------------------');
		console.log('::: Environment is: ' + process.env.NODE_ENV);
		console.log('::: '+config.db_uri);
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

		var accessLogStream = rfs.createStream('access.log', {
			interval: '1d', // rotate daily
			// FIX for __dirname as its not defined in ES module scope
			path: path.join(path.dirname(fileURLToPath(import.meta.url)), '../log')
		});
		if (config.logs === true) {
			console.log(':::--------------------------------');
			console.log('::: logfile is at: logs/access.log');
			this.app.use(morgan('tiny', { stream: accessLogStream }))
		}
//		this.app.use(errorHandler);
//		this.app.use(notFoundHandler);

		this.app.use('/auth', authRoutes);
		this.app.use('/user', userRoutes);
		this.app.use('/content', contentRoutes);

		console.log(':::--------------------------------');

		this.app.listen(config.port, () => {
  			console.log(`::: the API is avail@ http://localhost:${config.port}`);
			console.log(':::--------------------------------');
		});
	}
}
new App();