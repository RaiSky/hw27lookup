import {ObjectId} from 'mongoose'

export class CreateCarDTO {    
    readonly mark: string;
    readonly model: string;
    readonly price: number;
    readonly userId: ObjectId;
    readonly color: string;
}