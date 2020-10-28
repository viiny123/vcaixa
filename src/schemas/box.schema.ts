import { Schema, model } from 'mongoose'
import { BoxModel } from '../models/box.model'

const Box = new Schema({
  name: String
})

export default model<BoxModel>('User', Box)
