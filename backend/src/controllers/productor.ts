import { Request, Response } from 'express'
import { myDataSource } from '../app-data-source'
import { Productor } from '../entity/productor'

/**
 * Controlador de productor, tarea: implementar decorador que maneje errores en los metodos
 */
export class ProductorController
{
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


    public static async actualizar(req: Request, res: Response): Promise<void>
    {
        console.log(req.params.id)
        console.log(req.body)
        // tarea: validar id 
        const id_productor = Number(req.params.id)
        const productor_repository = myDataSource.getRepository(Productor);

        try {
            // Verificar si el productor existe antes de intentar actualizar
            const productor_existente = await productor_repository.findOne(id_productor);
    
            if (!productor_existente) {
                res.status(404).send({ error: 'Productor no encontrado' });
                return;
            }

        const data = await myDataSource.getRepository(Productor).save({ ...req.body, id_productor: Number(req.params.id) })
        res.send(data)
        }
        catch (error) {
            console.log(error)
            res.status(500).send({ error: 'Error al actualizar el productor' })
        }
    }


    public static async eliminar(req: Request, res: Response): Promise<void>
    {
        console.log(req.params.id)
        console.log(req.body)
        // tarea: validar id
        const data = await myDataSource.getRepository(Productor).delete(req.params.id)
        res.send(data)
    }
}