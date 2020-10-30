import { Router } from 'express'
import MoveController from '../controllers/move.controller'

const moveRouter = Router()

moveRouter.get('/:cashId', MoveController.movesByCashId)
moveRouter.post('/', MoveController.create)

export default moveRouter
