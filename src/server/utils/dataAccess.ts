import * as mongoose from 'mongoose';
import config from '../config/server-config';

class DataAccess {
    static mongooseInstance: mongoose.Mongoose;
    static mongooseConnection: mongoose.Connection;

    constructor () {
        DataAccess.connect();
    }

    static connect (): mongoose.Mongoose {
        if(this.mongooseInstance) { return this.mongooseInstance; } 
        this.mongooseConnection  = mongoose.connection;
        this.mongooseConnection.on('connected', () =>  console.log('DB Connection was opened')); 
        this.mongooseConnection.on('disconnected', () =>  console.log('DB Connection was disconnected'));
        this.mongooseConnection.on('error', (err) => console.log('DB Connection error: ' + err));
        mongoose.connect(config.mangoConnetionUri, config.mangoConnetionOptions)
            .then(res => this.mongooseInstance = res);
        
        return this.mongooseInstance;
    }
}

DataAccess.connect();
export default DataAccess;