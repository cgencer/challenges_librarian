// HACK: to import json
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

import { TEnvironment, IConfig } from "./config.type.js";

//const jsonFileConfig: any = require(`./config/app-${process.env.NODE_ENV || 'dev'}.json`);
let conFile: string = process.env.NODE_ENV || 'dev';

import jsonFileConfigDev from './app-dev.json' assert { type: 'json' };
import jsonFileConfigProd from './app-prod.json' assert { type: 'json' };

const config: any = Object.assign({}, conFile == 'dev' ? jsonFileConfigDev : jsonFileConfigProd);

// const jsonFilePolicies: any = require('./policies.json');
import jsonFilePolicies from './policies.json' assert { type: 'json' };

const policies: any = Object.assign({}, jsonFilePolicies);
export { config, policies };
