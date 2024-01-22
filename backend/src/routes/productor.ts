import { Router } from 'express'
import { ProductorController } from '../controllers/productor'

const routes = Router()

routes.get('/', ProductorController.listar)
routes.post('/', ProductorController.crear)
routes.put('/:id', ProductorController.actualizar)
routes.delete('/:id', ProductorController.eliminar)

export default routes