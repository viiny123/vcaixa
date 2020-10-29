import { Schema, model } from 'mongoose'
import { UserModel } from '../models/user.model'

const User = new Schema({
  name: String,
  email: String
})

export default model<UserModel>('user', User)
