//import config from './app-dev.json' with { type: 'json' };

import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const jsonFile: any = require('./app-dev.json');

const config = Object.assign({}, jsonFile);

export { config };
