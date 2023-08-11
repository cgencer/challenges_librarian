import { Sequelize } from 'sequelize';

export default class dbInit {

	constructor(NODE_ENV: string){

		const sequelize = new Sequelize(NODE_ENV);

		try {
			await sequelize.authenticate();
			console.log("Connection has been established successfully.");
		} catch (error) {
			console.error("Unable to connect to the database:", error);
		}
	}
}
