class Entrainement {
  final int id;
  final String nom_entrainement;

  Entrainement({required this.id, required this.nom_entrainement});

  factory Entrainement.fromJson(Map<String, dynamic> json) {
  return Entrainement(
    id: json['id'],
    nom_entrainement: json['nom_entrainement'],
  );
  }
}