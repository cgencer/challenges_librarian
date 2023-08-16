// HACK: to import json
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

import { TEnvironment, IConfig } from "./config.type.js";

const env = process.env.NODE_ENV || 'dev';
const envConfigFile = `./app-${env}.json`;
const jsonFileConfig: any = require(envConfigFile);
const config: IConfig = Object.assign({}, jsonFileConfig);

const jsonFilePolicies: any = require('./policies.json');
const policies: any = Object.assign({}, jsonFilePolicies);
export { config, policies };
