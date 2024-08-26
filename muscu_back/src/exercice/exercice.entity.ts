import { GroupeMusculaire } from 'src/groupe_musculaire/groupe_musculaire.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinColumn, OneToMany, JoinTable } from 'typeorm';

@Entity()
export class Exercice {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom_exercice: string;

  @ManyToOne(() => GroupeMusculaire, groupe_musculaire => groupe_musculaire.exercices)
  @JoinColumn({ name: 'groupe_musculaire_principal' })
  groupe_musculaire_principal: GroupeMusculaire;

  @ManyToMany(() => GroupeMusculaire, groupe_musculaire => groupe_musculaire.exercices_secondaires)
  @JoinTable({ name: 'exercice_groupe_musculaire_secondaire' })
  groupe_musculaire_secondaire: GroupeMusculaire[];

}