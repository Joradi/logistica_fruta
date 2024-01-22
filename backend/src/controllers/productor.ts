import { Request, Response } from 'express'
import { myDataSource } from '../app-data-source'
import { Productor } from '../entity/productor'

export class ProductorController
{
    public static async listar(req: Request, res: Response): Promise<void>
    {
        const data = await myDataSource.getRepository(Productor).find()
        await res.send(data)
    }

    public static async crear(req: Request, res: Response): Promise<void>
    {
        console.log(req.body)
        const data = await myDataSource.getRepository(Productor).save(req.body)
        await res.send(data)
    }

    public static async actualizar(req: Request, res: Response): Promise<void>
    {
        console.log(req.params.id)
        console.log(req.body)
        const data = await myDataSource.getRepository(Productor).save({ ...req.body, id_productor: Number(req.params.id) })
        await res.send(data)
    }

    public static async eliminar(req: Request, res: Response): Promise<void>
    {
        console.log(req.params.id)
        console.log(req.body)
        const data = await myDataSource.getRepository(Productor).delete(req.params.id)
        await res.send(data)
    }
}