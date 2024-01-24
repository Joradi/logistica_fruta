import { Request, Response } from "express";
import { myDataSource } from "../app-data-source";
import { EmpresaTransportes } from '../entity/empresa_transportes';
import { Catch } from "../decorators/catch";
import { Productor } from "../entity/productor";

export class EmpresaTransportesController 
{
    @Catch
    public static async listar(req: Request, res: Response): Promise<void>
    {
        const data = await myDataSource.getRepository(EmpresaTransportes).find()
        res.send(data)
    }

    public static async crear(req: Request, res: Response): Promise<void>
    {
        console.log(req.body)

        const { nombre_empresa, contacto_empresa} = req.body

        if(!nombre_empresa)
        {
            res.status(400).send({ error: 'Falta el nombre de la empresa de transporte' })
            return
        }
        if(!contacto_empresa)
        {
            res.status(400).send( { error: 'Falta el contacto de la empresa' })
            return
        }

        const data = await myDataSource.getRepository(EmpresaTransportes).save(req.body)
        res.send(data)
    }

    @Catch
    public static async actualizar(req: Request, res: Response): Promise<void>
    {
        console.log(req.params.id)
        console.log(req.body)

        const id_empresa_transportes = Number(req.params.id)

        if(!id_empresa_transportes || isNaN(Number(id_empresa_transportes)))
        {
            res.status(400).send( { error: 'El id de la empresa no es valido' } )
            return
        }

        const empresa_transporte_repository = myDataSource.getRepository(EmpresaTransportes)

            const empresa_transporte_existente = await empresa_transporte_repository.findOne( { where: { id_empresa_transportes } } )

            if(!empresa_transporte_existente)
            {
                res.status(400).send( { error: 'Empresa no encontrada' } )
                return
            }

            const data = myDataSource.getRepository(EmpresaTransportes).save( { ...req.body, id_empresa_transportes: Number(req.params.id) } )
            res.send(data)
    }

    @Catch
    public static async eliminar(req: Request, res: Response): Promise<void>
    {
        console.log(req.params.id)
        console.log(req.body)

        const id_empresa_transportes = Number(req.params.id)

        if(!id_empresa_transportes || isNaN(Number(id_empresa_transportes)))
        {
            res.status(400).send( { error: 'El id de la empresa no es valido' } )
            return
        }
        
        const empresa_transportes_repository = myDataSource.getRepository(EmpresaTransportes)

            const empresa_transportes_exitente = await empresa_transportes_repository.findOne( { where: {id_empresa_transportes} } )
            
            if(!empresa_transportes_exitente){
                res.status(400).send( { error: 'Empresa no encontrada' } )
                return
            }

            const data = myDataSource.getRepository(EmpresaTransportes).delete(req.params.id)
            res.send(data)
    }
}