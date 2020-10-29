import { Router } from 'express'
import CategoryController from '../controllers/category.controller'

const categoryRouter = Router()

categoryRouter.get('/', CategoryController.index)
categoryRouter.post('/', CategoryController.create)

export default categoryRouter
