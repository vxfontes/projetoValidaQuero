import 'package:flutter/material.dart';
import 'package:validaquero/utils/data_help.dart';
import 'package:validaquero/components/texts/texts.dart';
import 'package:validaquero/models/arquivo_model.dart';
import 'package:validaquero/themes/app_colors.dart';

class ModalArquivo extends StatelessWidget {
  const ModalArquivo({super.key, required this.arquivo});

  final Arquivo arquivo;

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 290,
      padding: const EdgeInsets.all(25),
      child: Column(
        children: [
          Row(
            children: [
              Padding(
                padding: const EdgeInsets.only(bottom: 8.0),
                child: Text(
                  arquivo.titulo,
                  style: const TextStyle(
                    fontSize: 22,
                    fontWeight: FontWeight.w500,
                  ),
                ),
              ),
            ],
          ),
          Row(children: [
            TextNumberLegend(label: 'Template: ', value: arquivo.template)
          ]),
          Row(children: [
            TextNumberLegend(label: 'Formato: ', value: arquivo.formato)
          ]),
          Row(children: [
            TextNumberLegend(
                label: 'Data de criação: ',
                value: DataHelp(DateTime.parse(arquivo.dataCriacao)))
          ]),
          Row(children: [
            TextNumberLegend(label: 'Autor: ', value: arquivo.usuario.nome)
          ]),
          Row(children: [
            TextNumberLegend(
                label: 'Quantidade de linhas: ',
                value: arquivo.linhas.toString())
          ]),
          Row(children: [
            Expanded(
              child: Padding(
                padding: const EdgeInsets.only(top: 15),
                child: ElevatedButton(
                  onPressed: () {},
                  style: ElevatedButton.styleFrom(
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(8.0),
                    ),
                    backgroundColor: ThemeColors.primaryColor,
                  ),
                  child: const Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Icon(
                        Icons.download,
                        color: Colors.white,
                      ),
                      SizedBox(width: 8),
                      Text(
                        'Download',
                        style: TextStyle(
                          color: Colors.white,
                          fontFamily: 'Roboto',
                          fontWeight: FontWeight.w400,
                          letterSpacing: 1.2,
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            )
          ])
        ],
      ),
    );
  }
}