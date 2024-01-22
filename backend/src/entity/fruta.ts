import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Productor } from './productor';
import { DetalleDespacho } from './detalle_despacho';

@Entity()
export class Fruta {
  @PrimaryGeneratedColumn()
  id_fruta: number;

  @Column()
  nombre_fruta: string;

  @Column()
  valor_kilo: number;

  @Column()
  merma_porcentaje: number;

  @ManyToOne(() => Productor, productor => productor.frutas)
  productor: Productor;

  @OneToMany(() => DetalleDespacho, detalleDespacho => detalleDespacho.fruta)
  detallesDespacho: DetalleDespacho[]; // Agregada la relación con DetalleDespacho

  @Column()
  id_empresa: number; // Nuevo campo para la empresa

  @Column()
  valor_kilo_productor: number; // Nuevo campo para el valor por kilo específico del productor
}

