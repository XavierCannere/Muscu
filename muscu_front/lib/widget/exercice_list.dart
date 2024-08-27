import 'package:flutter/material.dart';
import 'package:muscu_front/controllers/entrainement.controller.dart';
import 'package:muscu_front/controllers/exercice.controller.dart';
import 'package:muscu_front/entity/entrainement.dart';
import 'package:muscu_front/entity/exercice.dart';

class ExerciceList extends StatefulWidget {
  final int id_entrainement;
  ExerciceList({required this.id_entrainement});

  @override
  _ExerciceListState createState() => _ExerciceListState();
}

class _ExerciceListState extends State<ExerciceList> {
  late Future<List<Exercice>> futureExercice;

  @override
  void initState() {
    super.initState();
    futureExercice = getExerciceDesEntrainements(widget.id_entrainement);
  }
  
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Liste des exercices'),
      ),
      body: FutureBuilder<List<Exercice>>(
        future: futureExercice,
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return Center(child: CircularProgressIndicator());
          } else if (snapshot.hasError) {
            return Center(child: Text('Erreur: ${snapshot.error}'));
          } else if (!snapshot.hasData || snapshot.data!.isEmpty) {
            return Center(child: Text('Aucun exercice trouvé.'));
          } else {
            return ListView.builder(
              itemCount: snapshot.data!.length,
              itemBuilder: (context, index) {
                return Container(
                  margin: const EdgeInsets.all(2.0), // Marge extérieure entre les ListTiles
                  decoration: BoxDecoration(
                    border: Border.all(
                      color: Colors.black, // Couleur de la bordure
                      width: 1.0, // Épaisseur de la bordure
                    ),
                    borderRadius: BorderRadius.circular(8.0), // Arrondissement des listTiles
                  ),
                  child: ListTile(
                    title: Text(snapshot.data![index].nom_exercice),  
                    subtitle: const Text("Répétitions: 10\nSéries: 3"),
                    onTap: () {
                      // Ouvrir l'exercice
                    },
                  ),
                );
              }, 
            );
          }
        },
      ),
    );
  }
}
