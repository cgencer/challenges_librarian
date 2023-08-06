import { Sequelize } from 'sequelize';
const config_app = require('../config/app.js');

const sequelize = new Sequelize('postgres://'+config_app.app.db_uri);
try {
	await sequelize.authenticate();
	console.log("Connection has been established successfully.");
} catch (error) {
	console.error("Unable to connect to the database:", error);
}

export default {
	sequelize	
};