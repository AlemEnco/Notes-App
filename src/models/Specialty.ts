import mongoose, { Schema, model } from 'mongoose';

export interface Book extends mongoose.Document {
    name: String,
    description: String
}

const SpecialtySchema = new Schema({
    name: String,
    description: String
})

export default model<Book>('Specialty', SpecialtySchema)