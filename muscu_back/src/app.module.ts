
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Entrainement } from './entrainement/entrainement.entity';
//import { Entrainement } from './entrainement/entrainement.entity';
import { EntrainementService } from './entrainement/entrainement.service';
import { EntrainementController } from './entrainement/entrainement.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1', // ou l'adresse de votre serveur PostgreSQL
      port: 5432, // port par défaut de PostgreSQL
      username: 'xavier', // remplacez par votre utilisateur PostgreSQL
      password: 'cannere', // remplacez par votre mot de passe PostgreSQL
      database: 'muscu', // remplacez par le nom de votre base de données
      entities: [Entrainement],
      synchronize: true,
      logging: true,
    }),
    TypeOrmModule.forFeature([Entrainement]),
  ],
  controllers: [AppController, EntrainementController],
  providers: [AppService, EntrainementService],
  exports: [TypeOrmModule],
})
export class AppModule {}
