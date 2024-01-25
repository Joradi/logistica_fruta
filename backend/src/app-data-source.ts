import { DataSource } from 'typeorm'
import { Articulo } from './entity/articulo'
import { Despacho } from './entity/despacho'
import { DetalleDespacho } from './entity/detalle_despacho'
import { EmpresaTransportes } from './entity/empresa_transportes'
import { Fruta } from './fruta/fruta.entity'
import { Kilometraje } from './entity/kilometraje'
import { Productor } from './productor/productor.entity'

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
    entities: [Articulo, Despacho, DetalleDespacho, EmpresaTransportes, Fruta, Kilometraje, Productor],
    logging: true,
    synchronize: true,
    extra: { insecureAuth: true }
})