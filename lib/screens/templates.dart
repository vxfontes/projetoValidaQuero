import 'package:flutter/material.dart';
import 'package:validaquero/components/cards/card_template.dart';
import 'package:validaquero/data/templates.dart';

class Templates extends StatefulWidget {
  const Templates({super.key});

  @override
  State<Templates> createState() => _TemplatesState();
}

class _TemplatesState extends State<Templates> {
  final List templateList = templatesList;
  List filteredList = [];

  @override
  void initState() {
    super.initState();
    filteredList = templateList;
  }

  void filterTemplates(String query) {
    setState(() {
      filteredList = templateList
          .where((template) =>
          template.titulo.toLowerCase().contains(query.toLowerCase()))
          .toList();
    });
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 10.0, horizontal: 16.0),
      child: CustomScrollView(
        slivers: [
          SliverToBoxAdapter(
            child: Padding(
              padding: const EdgeInsets.symmetric(vertical: 10.0),
              child: TextField(
                onChanged: filterTemplates,
                decoration: const InputDecoration(
                  icon: Icon(Icons.search),
                  hintText: 'Buscar templates por nome...',
                ),
              ),
            ),
          ),
          SliverList(
            delegate: SliverChildBuilderDelegate(
              (context, index) {
                return CardTemplate(
                  template: filteredList[index]
                );
              },
              childCount: filteredList.length,
            ),
          )
        ],
      ),
    );
  }
}
