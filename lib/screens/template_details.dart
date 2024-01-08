import 'package:flutter/material.dart';
import 'package:validaquero/components/texts/chip.dart';
import 'package:validaquero/components/texts/tables.dart';
import 'package:validaquero/components/texts/texts.dart';
import 'package:validaquero/models/template_model.dart';
import 'package:validaquero/themes/app_colors.dart';
import 'package:validaquero/utils/data_help.dart';

class TemplateDetails extends StatelessWidget {
  const TemplateDetails({super.key, required this.template});

  final Template template;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(template.titulo),
        backgroundColor: ThemeColors.fundoComponenteColor,
      ),
      backgroundColor: ThemeColors.fundoPrincipalColor,
      body: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.all(15.0),
          child: Container(
            padding: const EdgeInsets.all(14.0),
            decoration: BoxDecoration(
              color: ThemeColors.fundoComponenteColor,
              borderRadius: BorderRadius.circular(10),
            ),
            child: Column(
              children: [
                Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: TextTitleBig(title: template.titulo),
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                  children: [
                    ChipAtivoDesativado(
                      label: template.status,
                      ativo: template.status == 'Ativo' ? true : false,
                    ),
                    ChipPink(label: template.formato),
                  ],
                ),
                Padding(
                  padding: const EdgeInsets.all(10.0),
                  child: TextNumberLegend(
                    label: 'Descrição ',
                    value: template.descricao,
                  ),
                ),
                TabelaCampos(campos: template.campos),
                Padding(
                  padding: const EdgeInsets.all(15.0),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    crossAxisAlignment: CrossAxisAlignment.center,
                    children: [
                      Row(
                        children: [
                          const Padding(
                            padding: EdgeInsets.only(right: 8.0),
                            child: Icon(Icons.account_circle_outlined),
                          ),
                          Text(template.usuario.nome),
                        ],
                      ),
                      Column(children: [
                        const Text('Data de criação'),
                        Text(dataHelp(DateTime.parse(template.dataCriacao))),
                      ])
                    ],
                  ),
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    const Icon(
                      Icons.download_rounded,
                      color: ThemeColors.primaryColor,
                    ),
                    Center(
                      child: ElevatedButton(
                        onPressed: () {},
                        style: ElevatedButton.styleFrom(
                          backgroundColor: ThemeColors.primaryColor,
                        ),
                        child: const Row(
                          mainAxisSize: MainAxisSize.min,
                          children: [
                            Icon(
                              Icons.cloud_upload,
                              color: Colors.white,
                            ),
                            SizedBox(width: 8),
                            Text(
                              'Upload de arquivo',
                              style: TextStyle(color: Colors.white),
                            ),
                          ],
                        ),
                      ),
                    ),
                  ],
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
