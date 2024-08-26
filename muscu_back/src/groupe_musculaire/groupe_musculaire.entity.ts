import { Exercice } from 'src/exercice/exercice.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinColumn, ManyToOne } from 'typeorm';

@Entity()
export class GroupeMusculaire {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom_groupe: string;

  @OneToMany(() => Exercice, exercice => exercice.groupe_musculaire_principal)
  exercices: Exercice[];

  @ManyToMany(() => Exercice, exercice => exercice.groupe_musculaire_secondaire)
  exercices_secondaires: Exercice[];


}