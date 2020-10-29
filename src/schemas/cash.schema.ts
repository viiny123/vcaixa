import { Schema, model } from 'mongoose'
import { CashModel } from '../models/cash.model'
import moveSchema from './move.schema'

const Cash = new Schema({
  totalBalance: Number,
  moves: [moveSchema]
})

export default model<CashModel>('cash', Cash)
