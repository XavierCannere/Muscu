import { Exercice } from 'src/exercice/exercice.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn, ManyToMany, JoinTable } from 'typeorm';

@Entity()
export class Entrainement {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom_entrainement: string;

 
  @ManyToMany(() => Exercice, exercice => exercice.entrainements)
  @JoinTable({
    name: 'entrainement_exercice',  
    joinColumn: {
      name: 'entrainement_id', 
      referencedColumnName: 'id', 
    },
    inverseJoinColumn: {
      name: 'exercice_id', 
      referencedColumnName: 'id',
    }
  })
  exercices: Exercice[];

  //TABLEAU D'EXERCICES
}