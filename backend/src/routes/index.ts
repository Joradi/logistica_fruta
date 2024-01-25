import { Router } from 'express'
import ProductorRoutes from '../productor/productor.routes'
import FrutaRoutes from '../fruta/fruta.routes'

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