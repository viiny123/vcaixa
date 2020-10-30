import { MoveModel } from '../move.model'
import { CategoryModel } from '../category.model'
import { MoveType } from '../enums/move-type.enum'

export class MoveResponse {
  constructor (move: MoveModel, category: CategoryModel) {
    this.id = move._id
    this.cashId = move.cashId
    this.date = move.date
    this.categoryId = move.categoryId
    this.category = category.name
    this.type = MoveType[move.type]
    this.value = move.value
    this.description = move.description
  }

  id: string
  cashId: string
  date: Date
  categoryId: string
  category: string
  type: MoveType
  value: number
  description: string
}
