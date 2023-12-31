import 'package:flutter/material.dart';
import 'package:validaquero/components/cards/card_template.dart';
import 'package:validaquero/data/templates.dart';

class Templates extends StatelessWidget {
  const Templates({super.key});

  final List templateList = templatesList;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 10.0, horizontal: 16.0),
      child: CustomScrollView(
        slivers: [
          SliverList(
            delegate: SliverChildBuilderDelegate(
              (context, index) {
                return CardTemplate(
                  title: templateList[index]['title'],
                  autor: templateList[index]['autor'],
                  formato: templateList[index]['formato'],
                  colunas: templateList[index]['colunas'],
                  status: templateList[index]['status'],
                );
              },
              childCount: templateList.length,
            ),
          )
        ],
      ),
    );
  }
}
