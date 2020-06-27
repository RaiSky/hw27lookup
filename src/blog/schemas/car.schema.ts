import * as mongoose from 'mongoose';
import {ObjectId} from 'mongoose';

export const carSchema = new mongoose.Schema({
    mark: String,       
    model: String,
    price: Number,
    userId: ObjectId,       
    color: String,   
},{versionKey:false})