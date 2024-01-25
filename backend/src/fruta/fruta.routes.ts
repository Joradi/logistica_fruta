import { Router } from 'express'
import { FrutaController } from './fruta.controller'

const routes = Router()

routes.get('/', FrutaController.listar)
routes.post('/', FrutaController.crear)

export default routes