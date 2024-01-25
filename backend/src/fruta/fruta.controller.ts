import { Request, Response } from 'express'
import { myDataSource } from '../app-data-source'
import { Fruta } from './fruta.entity'
import { Catch } from '../decorators/catch'
import { Productor } from '../productor/productor.entity'


/**
 * @description ejemplo de controlador que maneja relaciones (basico) 
 * 'un productor tiene muchas frutas, pero una fruta solo tiene un productor'
 */
export class FrutaController
{
    @Catch
    public static async listar(req: Request, res: Response): Promise<void>
    {
        const data = await myDataSource.getRepository(Fruta).find({ relations: { productor: true } })
        res.send(data)
    }


    @Catch
    /**
     * @description este metodo asume que req.body tiene la estructura de Fruta
     * sino es asi, debe arrojar un error 400 (bad request o mala peticion)
     */
    public static async crear(req: Request, res: Response): Promise<void>
    {
        // tarea, a que valores de postman coincide req.body????
        // tarea, a que valores de postman coincide req.params???? cuando son null o undefined?
        console.log(req.body)
        console.log(req.params)

        const { id_empresa, merma_porcentaje, nombre_fruta, productor, valor_kilo, valor_kilo_productor }: Fruta = req.body

        if (!id_empresa)
        {
            res.status(400).send({ error: 'Falta el id_empresa' })
            return
        }

        if (!merma_porcentaje)
        {
            res.status(400).send({ error: 'Falta merma_porcentaje' })
            return
        }

        if (!nombre_fruta)
        {
            res.status(400).send({ error: 'Falta nombre_fruta' })
            return
        }

        // productor es un id valido de productor o debe serlo
        if (!productor)
        {
            res.status(400).send({ error: 'Falta productor' })
            return
        }

        if (!valor_kilo)
        {
            res.status(400).send({ error: 'Falta valor_kilo' })
            return
        }

        if (!valor_kilo_productor)
        {
            res.status(400).send({ error: 'Falta valor_kilo_productor' })
            return
        }

        const productor_rep = await myDataSource.getRepository(Productor).findOne({ where: { id_productor: productor as number } })

        if (!productor_rep)
        {
            res.status(400).send({ error: 'El productor no existe' })
            return
        }

        const data = await myDataSource.getRepository(Fruta).save({
            id_empresa,
            merma_porcentaje,
            nombre_fruta,
            productor: productor_rep, // relacion
            valor_kilo,
            valor_kilo_productor
        })

        res.send(data)
    }
}