import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { Despacho } from './despacho'
import { Fruta } from './fruta'

@Entity()
export class Productor 
{
	@PrimaryGeneratedColumn()
	id_productor: number

	@Column()
	nombre_productor: string

	@Column()
	empresa_productor: string

	@OneToMany(() => Despacho, despacho => despacho.productor)
	despachos: Despacho[]

	@OneToMany(() => Fruta, fruta => fruta.productor)
	frutas: Fruta[] // Agregada la relación con Fruta
}
