import { Document,ObjectId } from 'mongoose';

export interface Car extends Document {
    readonly mark: string,
    readonly model: string,
    readonly price: number,
    readonly userId: ObjectId,
    readonly color: string,    
}