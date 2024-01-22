import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Despacho } from './despacho';

@Entity()
export class Kilometraje {
  @PrimaryGeneratedColumn()
  id_kilometraje: number;

  @Column()
  cantidad_kilometros: number;

  @Column()
  valor_kilometraje: number;

  @ManyToOne(() => Despacho, despacho => despacho.kilometraje)
  despacho: Despacho;

  @Column()
  id_empresa: number; // Nuevo campo para la empresa
}
