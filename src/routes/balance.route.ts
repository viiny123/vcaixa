import { Router } from 'express'
import BalanceController from '../controllers/balance.controller'

const balanceRouter = Router()

balanceRouter.get('/', BalanceController.balanceOnDay)

export default balanceRouter
