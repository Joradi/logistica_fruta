import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Articulo 
{
	@PrimaryGeneratedColumn()
	id_articulo: number

	@Column()
	nombre_articulo: string

	@Column()
	valor_por_unidad: number

	@Column()
	id_empresa: number // Nuevo campo para la empresa
}
