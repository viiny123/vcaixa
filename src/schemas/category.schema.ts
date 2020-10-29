import { Schema, model } from 'mongoose'
import { CategoryModel } from '../models/category.model'

const Category = new Schema({
  name: String
})

export default model<CategoryModel>('category', Category)
