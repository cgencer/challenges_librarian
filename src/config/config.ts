// HACK: to import json
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const jsonFile: any = require(`./app-${process.env.ENV}.json`);
const config = Object.assign({}, jsonFile);
export { config };
