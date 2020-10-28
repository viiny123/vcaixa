import { Request, Response } from 'express'
import Box from '../schemas/box.schema'

class BoxController {
  public async index (req: Request, res: Response): Promise<Response> {
    const boxs = await Box.find()

    return res.json(boxs)
  }

  public async create (req: Request, res: Response): Promise<Response> {
    const box = await Box.create(req.body)

    return res.status(201).json(box)
  }
}

export default new BoxController()
