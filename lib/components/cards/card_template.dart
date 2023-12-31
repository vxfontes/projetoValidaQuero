import 'package:flutter/material.dart';
import 'package:validaquero/components/texts/chip.dart';
import 'package:validaquero/components/texts/texts.dart';
import 'package:validaquero/themes/app_colors.dart';

class CardTemplate extends StatelessWidget {
  final String title, autor, formato;
  final int colunas;
  final String status;

  const CardTemplate(
      {super.key,
      required this.title,
      required this.autor,
      required this.formato,
      required this.colunas,
      required this.status});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 18.0),
      child: Container(
        height: 162,
        width: 300,
        padding: const EdgeInsets.all(15),
        decoration: BoxDecoration(
          color: ThemeColors.fundoComponenteColor,
          borderRadius: BorderRadius.circular(10),
        ),
        child: Column(
          children: [
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                TextTitleBold(title: title, arquivo: false),
                ChipPink(label: formato),
              ],
            ),
            Padding(
              padding: const EdgeInsets.fromLTRB(0, 5, 0, 2),
              child: Row(
                children: [
                  TextNumberLegend(
                      label: 'Número de colunas: ', value: colunas.toString())
                ],
              ),
            ),
            Row(
              children: [TextNumberLegend(label: 'Autor: ', value: autor)],
            ),
            Padding(
              padding: const EdgeInsets.only(top: 8.0),
              child: Row(
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  ChipAtivoDesativado(
                      label: status, ativo: status == 'Ativo' ? true : false),
                ],
              ),
            )
          ],
        ),
      ),
    );
  }
}
