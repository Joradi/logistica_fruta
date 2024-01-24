import { Request, Response } from 'express'
import { myDataSource } from '../app-data-source'
import { Articulo } from '../entity/embalaje'
import { Catch } from '../decorators/catch'

export class EmbalajeController
{
    public static async listar(req:Request, res:Response): Promise<void>
    {
        const data = await myDataSource.getRepository(Articulo).find()
        res.send(data)
    }

    
    public static async crear(req:Request, res:Response): Promise<void>
    {
        console.log(req.body)
        
        const {nombre_articulo, valor_por_unidad, id_empresa} = req.body

        if (!nombre_articulo)
        {
            res.status(400).send( {error: 'Falta el nombre del articulo'} )
            return
        }

        if (!valor_por_unidad)
        {
            res.status(400).send( {error: 'Falta el valor de la unidad' } )
            return
        }

        if (!id_empresa)
        {
            res.status(400).send( {error: 'Falta el rut de la empresa'} )
            return
        }

        const data = await myDataSource.getRepository(Articulo).save(req.body)
        res.send(data)
    }

    @Catch
    public static async actualizar(req:Request, res:Response): Promise<void>
    {
        console.log(req.params.id)
        console.log(req.body)

        const id_articulo = Number(req.params.id)

        if(!id_articulo || isNaN(Number(id_articulo))){
            res.status(400).send({ error:' El id de la empresa no es el valido'})
            return
        }

        const articulo_repository = myDataSource.getRepository(Articulo)

        const articulo_existente = await articulo_repository.findOne({ where: { id_articulo } } )

        if(!articulo_existente)
        {
            res.status(400).send( { error: 'Articulo no encontrado' })
            return
        }

        const data = await myDataSource.getRepository(Articulo).save( {...req.body, id_articulo: Number(req.params.id) } )
        res.send(data)
    }


    public static async eliminar(req:Request, res:Response): Promise<void>
     {
        console.log(req.params.id)
        console.log(req.body)

        
        const id_articulo = Number(req.params.id)

        if(!id_articulo || isNaN(id_articulo) || id_articulo < 1 )
        {
            res.status(400).send( { error: 'Id del articulo incorrecto' } )
            return
        }
        
        const articulo_repository = myDataSource.getRepository(Articulo)

            const articulo_existente = await articulo_repository.findOne( { where: { id_articulo} } )

            if(!articulo_existente)
            {
                res.status(400).send( { error: 'Articulo no encontrado' } )
            }

        const data = await myDataSource.getRepository(Articulo).save( {...req.body, id_articulo: Number(req.params.id) } )
        res.send(data)
     }
}