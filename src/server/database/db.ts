/*import {MongoClient, MongoCallback} from 'mongodb';

export default function defineDB(uri: string, propNameInCtx: string = 'db') {
	let db: MongoClient;
    return async function koaMongoDb(ctx, next) {
		if (!db) {
			try {
				db = await MongoClient.connect(uri, {});
			} catch (err) {
                db = undefined;
                throw new Error('Mongo connection error');
			}
		}

		ctx[propNameInCtx] = db;
		return next();
	};
}*/

import config from '../config/server-config';
import * as mongoose from 'mongoose';

export default function defineDB () {
  return new Promise((resolve, reject)=> {
    mongoose.connect(config.mangoConnetionUri, config.mangoConnetionOptions, error => {if (error) reject(error); else  resolve();});
  });
};