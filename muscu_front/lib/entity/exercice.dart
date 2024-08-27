class Exercice {
  final int id;
  final String nom_exercice;

  Exercice({required this.id, required this.nom_exercice});

  factory Exercice.fromJson(Map<String, dynamic> json) {
  return Exercice(
    id: json['id'],
    nom_exercice: json['nom_exercice'],
  );
  }
}