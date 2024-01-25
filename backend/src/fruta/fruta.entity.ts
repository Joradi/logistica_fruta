import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm'
import { Productor } from '../productor/productor.entity'
import { DetalleDespacho } from '../entity/detalle_despacho'

@Entity()
export class Fruta 
{
    @PrimaryGeneratedColumn()
    id_fruta: number

    @Column()
    nombre_fruta: string

    @Column()
    valor_kilo: number

    @Column()
    merma_porcentaje: number

    @ManyToOne(() => Productor, productor => productor.frutas)
    productor: Productor | number

    @OneToMany(() => DetalleDespacho, detalleDespacho => detalleDespacho.fruta)
    detallesDespacho: DetalleDespacho[] // Agregada la relación con DetalleDespacho

    @Column()
    id_empresa: number // Nuevo campo para la empresa
    // y no tiene ninguna relacion????
    // es lo mismo id_empresa que productor? o empresa transportes? a que hace referencia???
    // los id deben ser de tablas, no numeros, por cierto column() es string, no numero

    @Column()
    valor_kilo_productor: number // Nuevo campo para el valor por kilo específico del productor
}

