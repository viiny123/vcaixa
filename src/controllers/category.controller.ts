import { Request, Response } from 'express'
import Category from '../schemas/category.schema'

class CategoryController {
  public async index (req: Request, res: Response): Promise<Response> {
    const categorys = await Category.find()

    return res.status(200).json(categorys)
  }

  public async create (req: Request, res: Response): Promise<Response> {
    const category = await Category.create(req.body)

    return res.status(200).json(category)
  }
}

export default new CategoryController()
