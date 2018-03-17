import * as mongoose from 'mongoose';
import DataAccess from '../utils/dataAccess';
const Schema = mongoose.Schema;

const HeroSchema = new Schema({
    name: {type: String, required: true, unique: true },
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
});

export default DataAccess.mongooseConnection.model('Hero', HeroSchema);