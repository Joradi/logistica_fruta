import { Router } from 'express'
import ProductorRoutes from './productor'

const routes = Router()

routes.use('/productor', ProductorRoutes)

export default routes