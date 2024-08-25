import 'package:http/http.dart' as http;
import 'dart:convert';
import 'package:muscu_front/entity/entrainement.dart';

Future<List<Entrainement>> fetchEntrainement() async {
  final response = await http.get(Uri.parse('http://10.0.2.2:3000/entrainement/'));

  if (response.statusCode == 200) {
    List<dynamic> jsonResponse = jsonDecode(response.body);
    return jsonResponse.map((entrainement) => Entrainement.fromJson(entrainement)).toList();
  } else {
    throw Exception('Failed to load posts');
  }
}
