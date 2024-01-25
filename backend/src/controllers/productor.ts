import { Request, Response } from 'express'
import { myDataSource } from '../app-data-source'
import { Productor } from '../entity/productor'
import { Catch } from '../decorators/catch'


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

        const { nombre_productor, empresa_productor }: Productor = req.body

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

        
        const id_productor = Number(req.params.id)

        if(!id_productor || isNaN(Number(id_productor))){
            res.status(400).send({error:'El id del productor no es valido'})
            return
        }

        const productor_repository = myDataSource.getRepository(Productor)


            const productor_existente = await productor_repository.findOne({ where: { id_productor } })
    
            if (!productor_existente) 
            {
                res.status(404).send({ error: 'Productor no encontrado' })
                return
            }

            const data = await myDataSource.getRepository(Productor).save({ ...req.body, id_productor: Number(req.params.id) })
            res.send(data)

    }

    @Catch
    public static async eliminar(req: Request, res: Response): Promise<void>
    {
        console.log(req.params.id)
        console.log(req.body)

        
        const id_productor = Number(req.params.id)

        if(!id_productor || isNaN(id_productor) || id_productor < 1)
        {   
            res.status(400).send({error: 'El id del productor no es valido'})
            return
        }
        
        const productor_repository = myDataSource.getRepository(Productor)

            const productor_existente = await productor_repository.findOne({ where: {id_productor}})

            if(!productor_existente)
            {
                res.status(404).send({ error: 'Productor no encontrado'})
            }

        const data = await myDataSource.getRepository(Productor).delete(req.params.id)
        res.send(data)
    }
}