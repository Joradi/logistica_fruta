import { Router } from 'express'
import ProductorRoutes from './productor'

const routes = Router()

routes.use('/productor', ProductorRoutes)
// implementar rutas de embalaje
// implementar rutas de transporte
// implementar rutas de fruta
// implementar rutas de empresa
// implementar rutas de kilometraje
// implementar rutas de articulo
// etc

export default routes