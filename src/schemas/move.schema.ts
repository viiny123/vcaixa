import { Schema, model } from 'mongoose'
import { MoveModel } from '../models/move.model'

const Move = new Schema({
  cashId: String,
  date: Date,
  categoryId: String,
  type: { type: String, enum: ['input', 'exit'] },
  value: Number,
  description: String
})

export default model<MoveModel>('move', Move)
