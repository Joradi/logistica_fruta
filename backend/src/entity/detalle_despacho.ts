import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Despacho } from './despacho';
import { Fruta } from './fruta';
import { Articulo } from './articulo';

@Entity()
export class DetalleDespacho {
  @PrimaryGeneratedColumn()
  id_detalle: number;

  @Column()
  cantidad_fruta_kilos: number;

  @Column()
  cantidad_articulo_unidades: number;

  @ManyToOne(() => Despacho, despacho => despacho.detallesDespacho)
  despacho: Despacho;

  @ManyToOne(() => Fruta, fruta => fruta.detallesDespacho)
  fruta: Fruta; // Agregada la relación con Fruta

  @ManyToOne(() => Articulo, articulo => articulo.detallesDespacho)
  articulo: Articulo;

  @Column()
  id_empresa: number; // Nuevo campo para la empresa
}