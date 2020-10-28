import { Router } from 'express'
import boxRouter from './box.routes'

const routes = Router()

routes.use('/box', boxRouter)

export default routes
