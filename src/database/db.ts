import { Sequelize } from 'sequelize';
import { createTunnel, ForwardOptions, ServerOptions, SshOptions } from 'tunnel-ssh';

const ngrok = require('ngrok');
const config_app = require('../config/app.js');
let sequelize;

	sequelize = new Sequelize('icebreaker', 'postgres', 'postgres', {
		host: config_app.app.db_uri,
		dialect: 'postgres'
	});

	try {
		await sequelize.authenticate();
		console.log("Connection has been established successfully.");
	} catch (error) {
		console.error("Unable to connect to the database:", error);
	}


export default {
	sequelize	
};