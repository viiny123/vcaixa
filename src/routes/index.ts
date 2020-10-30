import { Router } from 'express'
import categoryRouter from './category.route'
import cashRouter from './cash.route'
import moveRouter from './move.route'
import balanceRouter from './balance.route'

const routes = Router()

routes.use('/api/category', categoryRouter)
routes.use('/api/cash', cashRouter)
routes.use('/api/move', moveRouter)
routes.use('/api/balance', balanceRouter)

export default routes
