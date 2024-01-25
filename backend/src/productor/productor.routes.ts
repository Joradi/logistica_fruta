import { Router } from 'express'
import { ProductorController } from './productor.controller'

const routes = Router()

routes.get('/', ProductorController.listar)
routes.post('/', ProductorController.crear)
// nota el :id es un parametro que en el controlador se vera en req.params.id
routes.put('/:id', ProductorController.actualizar)
routes.delete('/:id', ProductorController.eliminar)

export default routes