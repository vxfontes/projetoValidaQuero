import 'package:flutter/material.dart';
import 'package:validaquero/components/texts/texts.dart';

class CardUsuario extends StatelessWidget {
  const CardUsuario({super.key});

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () {
        showModalBottomSheet(
          context: context,
          builder: (BuildContext context) {
            return Container();
          },
        );
      },
      child: const Column(
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              TextTitleBold(
                title: 'nome',
                arquivo: true,
              ),
              Text(
                'fazer chip de cargo',
                style: TextStyle(fontSize: 17),
              ),
            ],
          ),
          Row(
            children: [
              Text(
                'matricula',
                style: TextStyle(fontSize: 17, color: Colors.black54),
              )
            ],
          ),
          Padding(
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
