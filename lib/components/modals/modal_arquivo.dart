import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:validaquero/utils/data_help.dart';
import 'package:validaquero/components/texts/texts.dart';
import 'package:validaquero/models/arquivo_model.dart';
import 'package:validaquero/themes/app_colors.dart';

class ModalArquivo extends StatelessWidget {
  const ModalArquivo({super.key, required this.arquivo});

  final Arquivo arquivo;

  void abrirUrl() async {
    var url = arquivo.url;
    if (await canLaunchUrl(Uri.parse(url))) {
      await launchUrl(Uri.parse(url));
    } else {
      throw 'Could not launch $url';
    }
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 290,
      padding: const EdgeInsets.all(25),
      child: Column(
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
          TextNumberLegend(label: 'Template: ', value: arquivo.template),
          TextNumberLegend(label: 'Formato: ', value: arquivo.formato),
          TextNumberLegend(
              label: 'Data de criação: ',
              value: dataHelp(DateTime.parse(arquivo.dataCriacao))),
          TextNumberLegend(label: 'Autor: ', value: arquivo.usuario.nome),
          TextNumberLegend(
              label: 'Quantidade de linhas: ',
              value: arquivo.linhas.toString()),
          Row(
            children: [
              Expanded(
                child: Padding(
                  padding: const EdgeInsets.only(top: 15),
                  child: ElevatedButton(
                    onPressed: () {
                      abrirUrl();
                    },
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
              ),
            ],
          ),
        ],
      ),
    );
  }
}
