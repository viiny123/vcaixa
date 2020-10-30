import { Router } from 'express'
import CashController from '../controllers/cash.controller'

const cashRouter = Router()

cashRouter.get('/cash-on-day', CashController.getCashByDay)
cashRouter.post('/open', CashController.open)
cashRouter.put('/close/:id', CashController.close)

export default cashRouter
