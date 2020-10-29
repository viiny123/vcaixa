import { Document } from 'mongoose'
import { CategoryModel } from './category.model'
import { CashType } from './enums/cash-type.enum'

export interface MoveModel extends Document {
    date: Date
    category: CategoryModel
    type: CashType
    value: number
    description: string
}
