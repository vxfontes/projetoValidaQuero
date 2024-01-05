import 'package:flutter/material.dart';
import 'package:validaquero/components/texts/chip.dart';
import 'package:validaquero/components/texts/texts.dart';
import 'package:validaquero/models/template_model.dart';
import 'package:validaquero/themes/app_colors.dart';

class CardTemplate extends StatelessWidget {
  final Template template;

  const CardTemplate(
      {super.key,
      required this.template,});

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
                TextTitleBold(title: template.titulo, arquivo: false),
                ChipPink(label: template.formato),
              ],
            ),
            Padding(
              padding: const EdgeInsets.fromLTRB(0, 5, 0, 2),
              child: Row(
                children: [
                  TextNumberLegend(
                      label: 'Número de colunas: ', value: template.quantidadeCampos.toString())
                ],
              ),
            ),
            Row(
              children: [TextNumberLegend(label: 'Autor: ', value: template.usuario.nome)],
            ),
            Padding(
              padding: const EdgeInsets.only(top: 8.0),
              child: Row(
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  ChipAtivoDesativado(
                      label: template.status, ativo: template.status == 'Ativo' ? true : false),
                ],
              ),
            )
          ],
        ),
      ),
    );
  }
}
