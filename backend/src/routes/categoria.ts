import { Router } from 'express'

const routes = Router()

routes.get('/', (req, res) => {
    res.send({
        message: 'listar',
        post:[
            {
                titulo:'categoria 1'
            }
        ]
    })
})

routes.post('/', (req, res) => {
    res.send({
        message: 'crear'
    })
})

routes.put('/', (req, res) => {
    res.send({
        message: 'actualizar'
    })
})

routes.delete('/', (req, res) => {
    res.send({
        message: 'eliminar'
    })
})

export default routes