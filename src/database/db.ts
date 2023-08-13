import { Sequelize } from 'sequelize';
import { Singleton } from '../helpers/singleton'

@Singleton
export default class dbInit {

	private static _instance: Sequelize;

	public static init(NODE_ENV: string): typeof Sequelize {
		// @ts-ignore
		dbInit._instance = new Sequelize(NODE_ENV).authenticate().then(() => {
			console.log('Connection has been established successfully.');
		}).catch((error) => {
			console.error('Unable to connect to the database: ', error);
		});
		return dbInit._instance;
	}
}
