import 'package:flutter/material.dart';
import 'package:muscu_front/widget/entrainement_list.dart';
import 'package:muscu_front/widget/exercice_list.dart';

class ExercicePage extends StatelessWidget {
  const ExercicePage({Key? key, required this.id_entrainement}) : super(key: key);

  final int id_entrainement;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        children: [
          Expanded(
            child: ExerciceList(id_entrainement: id_entrainement),
          ),
          Center(
            child: Wrap(
              children: [
                ElevatedButton(
                  onPressed: () {
                    // Action à effectuer lorsque le bouton est cliqué
                  },
                  child: const Text('Modifier un entrainement'), // Texte du bouton
                ),
            ],) 
          ),
          const SizedBox(height: 16), // Ajouter un espace sous le bouton
        ],
      ),
    );
  }
}
