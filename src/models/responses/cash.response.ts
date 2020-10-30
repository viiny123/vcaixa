import { CashModel } from '../cash.model'
import { CashStatus } from '../enums/cash-status.enum'

export class CashResponse {
  constructor (cash: CashModel) {
    this.id = cash._id
    this.status = CashStatus[cash.status]
    this.date = cash.date
  }

    id: string
    status: string
    date: Date
}
