import { Request, Response } from 'express'
import Cash from '../schemas/cash.schema'
import { CashResponse } from '../models/responses/cash.response'
import { CashStatus } from '../models/enums/cash-status.enum'

class CashController {
  public async getCashByDay (req: Request, res: Response): Promise<Response> {
    const dateString = req.query.date?.toString()
    const date = new Date(dateString ?? Date.now())

    const cashResponse = (await Cash.find({ date: date })).map(x => new CashResponse(x))

    return res.status(200).json(cashResponse)
  }

  public async open (req: Request, res: Response): Promise<Response> {
    const dateString = req.body.date?.toString()
    const date = new Date(dateString ?? Date.now())

    const openCashNow = await Cash.find({ date: new Date(date ?? Date.now()), status: CashStatus.open })
    if (openCashNow.length > 0) { return res.status(400).json({ message: `Já existe um caixa aberto no dia ${date.toLocaleDateString()}.` }) }

    const cash = await Cash.create(req.body)
    const response = new CashResponse(cash)

    return res.status(200).json(response)
  }

  public async close (req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const query = { _id: id }
    await Cash.findOneAndUpdate(query, { status: CashStatus.closed })

    return res.status(200).send()
  }
}

export default new CashController()
