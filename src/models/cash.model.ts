import { Document } from 'mongoose'
import { CashStatus } from './enums/cash-status.enum'

export interface CashModel extends Document{
    date: Date,
    status: CashStatus
}
