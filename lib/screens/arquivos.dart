import 'package:flutter/material.dart';
import 'package:validaquero/components/cards/card_arquivo.dart';
import 'package:validaquero/data/arquivos.dart';
import 'package:validaquero/themes/app_colors.dart';

class Arquivos extends StatelessWidget {
  Arquivos({super.key});

  final List arquivos = arquivosList;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(14.0),
      child: Container(
        padding: const EdgeInsets.all(20),
        decoration: BoxDecoration(
          color: ThemeColors.fundoComponenteColor,
          borderRadius: BorderRadius.circular(10),
        ),
        child: CustomScrollView(slivers: [
          SliverList(
            delegate: SliverChildBuilderDelegate(
              (context, index) {
                return CardArquivo(
                  arquivo: arquivos[index],
                );
              },
              childCount: arquivos.length,
            ),
          )
        ]),
      ),
    );
  }
}
