import 'package:flutter/material.dart';
import 'package:validaquero/components/texts/data_help.dart';
import 'package:validaquero/components/texts/texts.dart';

class CardArquivo extends StatelessWidget {
  const CardArquivo({super.key, required this.title, required this.template, required this.data});
  final String title, template, data;

  @override
  Widget build(BuildContext context) {
    final DateTime dataBruta = DateTime.parse(data);

    return Column(
      children: [
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            TextTitleBold(title: title, arquivo: true,),
            Text(
              DataHelp(dataBruta),
              style: const TextStyle(fontSize: 17),
            ),
          ],
        ),
        Row(
          children: [
            Text(
              template,
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
    );
  }
}
