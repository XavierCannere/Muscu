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
      body: EntrainementList(),
    );
  }
}