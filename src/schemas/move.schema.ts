import { Schema, model } from 'mongoose'
import { CashType } from '../models/enums/cash-type.enum'
import { MoveModel } from '../models/move.model'
import categorySchema from './category.schema'

const Move = new Schema({
  date: Date,
  category: categorySchema,
  type: CashType,
  value: Number,
  description: String
})

export default model<MoveModel>('move', Move)
