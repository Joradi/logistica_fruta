import { Router } from 'express'
import ProductorRoutes from './productor'
import FrutaRoutes from './fruta'

const routes = Router()

routes.use('/productor', ProductorRoutes)
routes.use('/fruta', FrutaRoutes)
// implementar rutas de embalaje
// implementar rutas de transporte
// implementar rutas de empresa
// implementar rutas de kilometraje
// implementar rutas de articulo
// etc

export default routes