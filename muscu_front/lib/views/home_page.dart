import 'package:flutter/material.dart';
import 'package:muscu_front/widget/list.dart';

class HomePage extends StatelessWidget {
  const HomePage({Key? key, required this.title}) : super(key: key);

  final String title;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(title),
      ),
      body: Column(
        children: [
          Expanded(
            child: EntrainementList(),
          ),
          Center(
            child: Wrap(
              children: [
                ElevatedButton(
                  onPressed: () {
                    // Action à effectuer lorsque le bouton est cliqué
                  },
                  child: const Text('Ajouter un Entraînement'), // Texte du bouton
                ),
                ElevatedButton(
                  onPressed: () {
                    // Action à effectuer lorsque le bouton est cliqué
                  },
                  child: const Text('Modifier un Entraînement'), // Texte du bouton
                ),
            ],) 
          ),
          const SizedBox(height: 16), // Ajouter un espace sous le bouton
        ],
      ),
    );
  }
}
