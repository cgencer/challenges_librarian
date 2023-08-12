import { Sequelize } from 'sequelize';

export default class dbInit {

	constructor(NODE_ENV: string){

		const sequelize = new Sequelize(NODE_ENV);

		try {

			(async () => {
				const asyncMsg = await sequelize.authenticate();;
				console.log(asyncMsg);
			})();
			
			console.log("Connection has been established successfully.");
		} catch (error) {
			console.error("Unable to connect to the database:", error);
		}
	}
}
