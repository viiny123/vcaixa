import { Router } from 'express'
import userRouter from './user.route'
import categoryRouter from './category.route'

const routes = Router()

routes.use('/user', userRouter)
routes.use('/category', categoryRouter)

export default routes
