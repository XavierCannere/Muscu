
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Entrainement } from './entrainement/entrainement.entity';
//import { Entrainement } from './entrainement/entrainement.entity';
import { EntrainementService } from './entrainement/entrainement.service';
import { EntrainementController } from './entrainement/entrainement.controller';
import { ExerciceService } from './exercice/exercice.service';
import { GroupeMusculaireService } from './groupe_musculaire/groupe_musculaire.service';
import { Exercice } from './exercice/exercice.entity';
import { GroupeMusculaire } from './groupe_musculaire/groupe_musculaire.entity';
import { ExerciceController } from './exercice/exercice.controller';
import { GroupeMusculaireController } from './groupe_musculaire/groupe_musculaire.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1', // ou l'adresse de votre serveur PostgreSQL
      port: 5432, // port par défaut de PostgreSQL
      username: 'xavier', // remplacez par votre utilisateur PostgreSQL
      password: 'cannere', // remplacez par votre mot de passe PostgreSQL
      database: 'muscu', // remplacez par le nom de votre base de données
      entities: [Entrainement, Exercice, GroupeMusculaire],
      synchronize: true,
      logging: true,
    }),
    TypeOrmModule.forFeature([Entrainement, Exercice, GroupeMusculaire]),
  ],
  controllers: [AppController, EntrainementController, ExerciceController, GroupeMusculaireController],
  providers: [AppService, EntrainementService, ExerciceService, GroupeMusculaireService],
  exports: [TypeOrmModule],
})
export class AppModule {}
