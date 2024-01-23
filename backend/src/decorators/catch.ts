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

    // tarea reemplazar el metodo original por uno nuevo


    // se retorna un nuevo descriptor al final
    return descriptor
}

// es mas facil de lo que parece