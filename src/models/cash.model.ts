import { Document } from 'mongoose'
import { MoveModel } from './move.model'

export interface CashModel extends Document{
    totalBalance: number,
    moves: MoveModel[]
}
