import { Request, Response } from 'express'
import Category from '../schemas/category.schema'
import { CategoryResponse } from '../models/responses/category.response'

class CategoryController {
  public async index (req: Request, res: Response): Promise<Response> {
    const categorys = (await Category.find()).map(x => new CategoryResponse(x))
    return res.status(200).json(categorys)
  }

  public async create (req: Request, res: Response): Promise<Response> {
    const category = await Category.create(req.body)
    const response = new CategoryResponse(category)

    return res.status(200).json(response)
  }
}

export default new CategoryController()
