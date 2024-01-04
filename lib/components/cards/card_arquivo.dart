import 'package:flutter/material.dart';
import 'package:validaquero/components/modals/modal_arquivo.dart';
import 'package:validaquero/utils/data_help.dart';
import 'package:validaquero/components/texts/texts.dart';
import 'package:validaquero/models/arquivo_model.dart';

class CardArquivo extends StatelessWidget {
  const CardArquivo({super.key, required this.arquivo});

  final Arquivo arquivo;

  @override
  Widget build(BuildContext context) {
    final DateTime dataBruta = DateTime.parse(arquivo.data);

    return GestureDetector(
      onTap: () {
        showModalBottomSheet(
          context: context,
          builder: (BuildContext context) {
            return ModalArquivo(arquivo: arquivo);
          },
        );
      },
      child: Column(
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              TextTitleBold(
                title: arquivo.title,
                arquivo: true,
              ),
              Text(
                DataHelp(dataBruta),
                style: const TextStyle(fontSize: 17),
              ),
            ],
          ),
          Row(
            children: [
              Text(
                arquivo.template,
                style: const TextStyle(fontSize: 17, color: Colors.black54),
              )
            ],
          ),
          const Padding(
            padding: EdgeInsets.symmetric(vertical: 3.0),
            child: Divider(
              color: Colors.black12,
            ),
          )
        ],
      ),
    );
  }
}