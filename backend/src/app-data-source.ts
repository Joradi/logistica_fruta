import { DataSource } from 'typeorm'

/**
 * @description Configuración de la conexión a la base de datos, 
 * tambien se usa para obtener repositorios de las entidades
 */
export const myDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'logistica_compra',
    entities: ['src/entity/*.ts'],
    logging: true,
    synchronize: true,
    extra: { insecureAuth: true }
})