import { Router } from 'express'
import UserController from './Controllers/UserController'

const routes = Router()

routes.get('/users', UserController.index)
routes.get('/users/:userId', UserController.show)
routes.post('/users', UserController.store)
routes.put('/users/:userId', UserController.update)

export default routes
