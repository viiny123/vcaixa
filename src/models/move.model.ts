import { Document } from 'mongoose'
import { MoveType } from './enums/move-type.enum'

export interface MoveModel extends Document {
    cashId: string
    date: Date
    categoryId: string
    type: MoveType
    value: number
    description: string
}
