import { Request, Response } from 'express'
import Move from '../schemas/move.schema'
import Cash from '../schemas/cash.schema'
import Category from '../schemas/category.schema'
import { MoveResponse } from '../models/responses/move.response'
import { BalanceResponse } from '../models/responses/balance.response'

class BalanceController {
  public async balanceOnDay (req: Request, res: Response): Promise<Response> {
    const dateString = req.query.date?.toString()
    const date = new Date(dateString ?? Date.now())

    const categorys = await Category.find()

    const cash = await Cash.findOne({ date: date })

    const moves = (await Move.find({ cashId: cash?._id })).map(move => {
      const category = categorys.find(x => x._id.toString() === move.categoryId)
      return new MoveResponse(move, category ?? new Category())
    })

    const balanceResponse = new BalanceResponse(moves)

    return res.status(200).json(balanceResponse)
  }
}

export default new BalanceController()
