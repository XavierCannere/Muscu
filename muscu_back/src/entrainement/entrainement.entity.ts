import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Entrainement {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom_entrainement: string;

  //TABLEAU D'EXERCICES
}