import 'package:http/http.dart' as http;
import 'dart:convert';
import 'package:muscu_front/entity/entrainement.dart';
import 'package:muscu_front/entity/exercice.dart';

Future<List<Entrainement>> getEntrainement() async {
  final response = await http.get(Uri.parse('http://10.0.2.2:3000/entrainement/'));

  if (response.statusCode == 200) {
    List<dynamic> jsonResponse = jsonDecode(response.body);
    return jsonResponse.map((entrainement) => Entrainement.fromJson(entrainement)).toList();
  } else {
    throw Exception('Failed to load posts');
  }
}

Future<List<Exercice>> getExerciceDesEntrainements(int id_training) async {
  final response = await http.get(Uri.parse('http://10.0.2.2:3000/exercice/entrainement/$id_training'));

  if (response.statusCode == 200) {
    List<dynamic> jsonResponse = jsonDecode(response.body);
    return jsonResponse.map((entrainement) => Exercice.fromJson(entrainement)).toList();
  } else {
    throw Exception('Failed to load posts');
  }
}
