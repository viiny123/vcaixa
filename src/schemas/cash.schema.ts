import { Schema, model } from 'mongoose'
import { CashModel } from '../models/cash.model'

const Cash = new Schema({
  date: Date,
  status: { type: String, enum: ['open', 'closed'], default: 'open' }
})

export default model<CashModel>('cash', Cash)
