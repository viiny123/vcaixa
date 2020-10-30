import { MoveType } from '../enums/move-type.enum'
import { CategoryResponse } from './category.response'
import { MoveResponse } from './move.response'

export class BalanceMove {
  constructor (move: MoveResponse) {
    this.data = move.date
    this.id = move.id
    this.category = { id: move.categoryId, name: move.category }
    this.type = MoveType[move.type]
    this.value = move.value
    this.description = move.description
  }

    data: Date
    id: string
    category: CategoryResponse
    type: MoveType
    value: number
    description: string
}
