import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { DetalleDespacho } from './detalle_despacho';
import { Productor } from './productor';
import { EmpresaTransportes } from './empresa_transportes';
import { Kilometraje } from './kilometraje';

@Entity()
export class Despacho {
  @PrimaryGeneratedColumn()
  id_despacho: number;

  @Column()
  numero_guia: string;

  @Column()
  observaciones: string;

  @Column({ default: false })
  pagada: boolean;

  @ManyToOne(() => Productor, productor => productor.despachos)
  productor: Productor;

  @ManyToOne(() => EmpresaTransportes, empresaTransportes => empresaTransportes.despachos)
  empresaTransportes: EmpresaTransportes;

  @OneToMany(() => DetalleDespacho, detalleDespacho => detalleDespacho.despacho)
  detallesDespacho: DetalleDespacho[];

  @OneToOne(() => Kilometraje, { cascade: true }) // Agregada la relación OneToOne
  @JoinColumn()
  kilometraje: Kilometraje;

  @Column()
  id_empresa: number;
  
  @Column()
  valor_kilo_transportista: number;
}

