// empresa-transportes.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Despacho } from './despacho';

@Entity()
export class EmpresaTransportes {
  @PrimaryGeneratedColumn()
  id_empresa_transportes: number;

  @Column()
  nombre_empresa: string;

  @Column()
  contacto_empresa: string;

  @OneToMany(() => Despacho, despacho => despacho.empresaTransportes)
  despachos: Despacho[];
}
