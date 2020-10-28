import { Router } from 'express'
import BoxController from '../controllers/box.controller'

const boxRouter = Router()

boxRouter.get('/', BoxController.index)
boxRouter.post('/', BoxController.create)

export default boxRouter
