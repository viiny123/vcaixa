import { MoveType } from '../enums/move-type.enum'
import { BalanceMove } from './balance-move.response'
import { MoveResponse } from './move.response'

export class BalanceResponse {
  constructor (moves: MoveResponse[]) {
    this.moves = moves.map(move => new BalanceMove(move))
    this.totalBalance = this.sumTotalBalance()
  }

  totalBalance: number
  moves: BalanceMove[]

  sumTotalBalance () : number {
    return this.moves.reduce((sum, current) => {
      if (current.type === MoveType.input) { sum += current.value } else { sum -= current.value }
      return sum
    }, 0)
  }
}
