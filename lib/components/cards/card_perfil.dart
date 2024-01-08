import 'package:flutter/material.dart';
import 'package:validaquero/components/texts/texts.dart';
import 'package:validaquero/themes/app_colors.dart';

class CardPerfilInfo extends StatelessWidget {
  const CardPerfilInfo({super.key, required this.legend, required this.label, required this.value1, required this.value2});
  final String legend, label, value1, value2;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: ThemeColors.fundoComponenteColor,
        borderRadius: BorderRadius.circular(10),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Padding(
            padding: const EdgeInsets.only(bottom: 4.0),
            child: Container(
              decoration: const BoxDecoration(
                shape: BoxShape.circle,
                color: ThemeColors.azulInfo,
              ),
              child: const Padding(
                padding: EdgeInsets.all(8.0),
                child: Icon(
                  Icons.info,
                  color: Colors.white,
                  size: 32,
                ),
              ),
            ),
          ),
          Text(
            legend,
            style: const TextStyle(fontSize: 20),
          ),
          TextAtivo(
            label: label,
            value1: value1,
            value2: value2,
          )
        ],
      ),
    );
  }
}
