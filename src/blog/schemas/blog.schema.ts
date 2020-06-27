import * as mongoose from 'mongoose';

export const userSchema = new mongoose.Schema({
    name: String,
    lastName: String,
    age: Number
},{versionKey:false})