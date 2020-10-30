import { Request, Response } from 'express'
import Move from '../schemas/move.schema'
import Category from '../schemas/category.schema'
import { MoveResponse } from '../models/responses/move.response'

class MoveController {
  public async movesByCashId (req: Request, res: Response): Promise<Response> {
    const { cashId } = req.params
    const categorys = await Category.find()
    const moves = (await Move.find({ cashId: cashId })).map(move => {
      const category = categorys.find(x => x._id === move.categoryId)
      return new MoveResponse(move, category ?? new Category())
    })

    return res.status(200).json(moves)
  }

  public async create (req: Request, res: Response): Promise<Response> {
    const move = await Move.create(req.body)
    const category = await Category.findById(move.categoryId)
    const response = new MoveResponse(move, category ?? new Category())

    return res.status(200).json(response)
  }
}

export default new MoveController()
