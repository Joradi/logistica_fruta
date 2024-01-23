import { Request, Response } from 'express'
import { myDataSource } from '../app-data-source'
import { Productor } from '../entity/productor'
import { Catch } from '../decorators/catch'

/**
 * Controlador de productor, tarea: implementar decorador que maneje errores en los metodos
 */
export class ProductorController
{
    @Catch
    public static async listar(req: Request, res: Response): Promise<void>
    {
        const data = await myDataSource.getRepository(Productor).find()
        res.send(data)
    }


    public static async crear(req: Request, res: Response): Promise<void>
    {
        console.log(req.body)

        const { nombre_productor, empresa_productor } = req.body

        if (!nombre_productor)
        {
            res.status(400).send({ error: 'Falta el nombre del productor' })
            return
        }

        if (!empresa_productor)
        {
            res.status(400).send({ error: 'Falta la empresa del productor' })
            return
        }

        const data = await myDataSource.getRepository(Productor).save(req.body)
        res.send(data)
    }


    @Catch
    public static async actualizar(req: Request, res: Response): Promise<void>
    {
        console.log(req.params.id)
        console.log(req.body)
        // tarea: que sucede si hago Number(undefined)?
        // tarea que sucece si hago Number(null)?
        // tarea que sucede si hago Number('abc')?
        const id_productor = Number(req.params.id)
        // tarea: validar id
        // validar que id sea numero
        // validar que id exista
        // validar que id sea igual o mayor a 1
        // validar que Productor exista
        // colocar req.params.id en una variable
        const productor_repository = myDataSource.getRepository(Productor)

        // colocar try catch en un decorador (el decorador "Catch" de mas arriba para ser especifico)
        // try 
        // {
            // Verificar si el productor existe antes de intentar actualizar
            // nota, el where permite buscar en base a lo que necesitemos
            const productor_existente = await productor_repository.findOne({ where: { id_productor } })
    
            if (!productor_existente) 
            {
                res.status(404).send({ error: 'Productor no encontrado' })
                return
            }

            const data = await myDataSource.getRepository(Productor).save({ ...req.body, id_productor: Number(req.params.id) })
            res.send(data)
        // }
        // catch (error) 
        // {
            // console.log(error)
            // res.status(500).send({ error: 'Error al actualizar el productor' })
        // }
    }


    public static async eliminar(req: Request, res: Response): Promise<void>
    {
        console.log(req.params.id)
        console.log(req.body)
        // tarea: validar id
        // validar que id sea numero
        // validar que id exista
        // validar que id sea igual o mayor a 1
        // validar que Productor exista
        // colocar req.params.id en una variable
        const data = await myDataSource.getRepository(Productor).delete(req.params.id)
        res.send(data)
    }
}