import { Response, Request} from 'express'
// crear decorador que reutilize el try catch de un metodo estatico de una clase

/**
 * Decorador que maneja errores en los metodos
 * @param target 
 * @param propertyKey 
 * @param descriptor 
 * @returns descriptor
 */
export function Catch(target: any, propertyKey: string, descriptor: PropertyDescriptor)
{
    // metodo original que se va a "decorar"
    const originalMethod = descriptor.value

    descriptor.value = async function(req: Request, res: Response, ...args: any[])
    {
        try
        {
            await originalMethod.call(this, req, res, ...args)
        }
        catch(error)
        {
            console.log(error)
            res.status(500).send({ error: 'Error en el servidor' })
        }
        return
    }

    // tarea reemplazar el metodo original por uno nuevo

    // pista descriptor.value es el metodo original, args son los argumentos que recibe el metodo original, considerar que necesitas acceder a res para enviar el error
    // descriptor.value = async function(...args) 
    // {
    // }

    // se retorna un nuevo descriptor al final
    return descriptor
}

// es mas facil de lo que parece