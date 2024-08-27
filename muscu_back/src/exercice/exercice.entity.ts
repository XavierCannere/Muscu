import { Entrainement } from 'src/entrainement/entrainement.entity';
import { GroupeMusculaire } from 'src/groupe_musculaire/groupe_musculaire.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToMany, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class Exercice {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom_exercice: string;

  @ManyToMany(() => GroupeMusculaire, groupe_musculaire => groupe_musculaire.exercices)
  @JoinTable({
    name: 'exercice_groupe_musculaire_principal', 
    joinColumn: {
      name: 'exercice_principal_id', 
      referencedColumnName: 'id',  
    },
    inverseJoinColumn: {
      name: 'groupe_musculaire_principal_id',  
      referencedColumnName: 'id',
    }
  })
  groupe_musculaire_principal: GroupeMusculaire;

  @ManyToMany(() => GroupeMusculaire, groupe_musculaire => groupe_musculaire.exercices_secondaires)
  @JoinTable({
    name: 'exercice_groupe_musculaire_secondaire',  
    joinColumn: {
      name: 'exercice_secondaire_id', 
      referencedColumnName: 'id', 
    },
    inverseJoinColumn: {
      name: 'groupe_musculaire_secondaire_id', 
      referencedColumnName: 'id',
    }
  })
  groupe_musculaire_secondaire: GroupeMusculaire[];

  @ManyToMany(() => Entrainement, entrainement => entrainement.exercices)
  entrainements: Entrainement[];

}