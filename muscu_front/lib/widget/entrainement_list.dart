import 'package:flutter/material.dart';
import 'package:muscu_front/controllers/entrainement.controller.dart';
import 'package:muscu_front/entity/entrainement.dart';
import 'package:muscu_front/views/exercice_page.dart';

class EntrainementList extends StatefulWidget {
  @override
  _EntrainementListState createState() => _EntrainementListState();
}

class _EntrainementListState extends State<EntrainementList> {
  late Future<List<Entrainement>> getEntrainements;
  late Future<List<Entrainement>> getExerciceDesEntrainements;

  @override
  void initState() {
    super.initState();
    getEntrainements = getEntrainement();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Liste des entrainements'),
      ),
      body: FutureBuilder<List<Entrainement>>(
        future: getEntrainements,
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return Center(child: CircularProgressIndicator());
          } else if (snapshot.hasError) {
            return Center(child: Text('Erreur: ${snapshot.error}'));
          } else if (!snapshot.hasData || snapshot.data!.isEmpty) {
            return Center(child: Text('Aucun entrainement trouvé.'));
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
                    title: Text(snapshot.data![index].nom_entrainement),  
                    subtitle: const Text("Dernière fois il y a 2 jours"),
                    trailing: const Icon(Icons.arrow_forward),
                    onTap: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(
                          builder: (context) => ExercicePage(id_entrainement: snapshot.data![index].id),
                        ),
                      );
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
