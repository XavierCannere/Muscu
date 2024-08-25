import 'package:flutter/material.dart';
import 'package:muscu_front/controllers/entrainement.controller.dart';
import 'package:muscu_front/entity/entrainement.dart';

class EntrainementList extends StatefulWidget {
  @override
  _EntrainementListState createState() => _EntrainementListState();
}

class _EntrainementListState extends State<EntrainementList> {
  late Future<List<Entrainement>> futureUsers;

  @override
  void initState() {
    super.initState();
    futureUsers = fetchEntrainement();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Liste des entrainements'),
      ),
      body: FutureBuilder<List<Entrainement>>(
        future: futureUsers,
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
                return ListTile(
                  title: Text(snapshot.data![index].nom_entrainement),  // Affiche le nom de l'utilisateur
                  //subtitle: Text(snapshot.data![index].email),
                );
              },
            );
          }
        },
      ),
    );
  }
}
