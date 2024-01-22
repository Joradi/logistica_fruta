import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { DetalleDespacho } from './detalle_despacho';

@Entity()
export class Articulo {
  @PrimaryGeneratedColumn()
  id_articulo: number;

  @Column()
  nombre_articulo: string;

  @Column()
  valor_por_unidad: number;

  @OneToMany(() => DetalleDespacho, detalleDespacho => detalleDespacho.articulo)
  detallesDespacho: DetalleDespacho[]; // Agregada la relación con DetalleDespacho

  @Column()
  id_empresa: number; // Nuevo campo para la empresa
}