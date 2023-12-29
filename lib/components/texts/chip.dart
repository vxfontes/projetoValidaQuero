import 'package:flutter/material.dart';
import 'package:validaquero/themes/app_colors.dart';

class ChipPink extends StatelessWidget {
  final String label;

  const ChipPink({super.key, required this.label});

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
          color: ThemeColors.secondaryColor,
          borderRadius: BorderRadius.circular(30)
      ),
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 13.0, vertical: 6.0),
        child: Text(
          label,
          style: const TextStyle(
            color: Colors.white,
            fontWeight: FontWeight.w400,
            fontSize: 14,
          ),
        ),
      ),
    );
  }
}

class ChipAtivoDesativado extends StatelessWidget {
  final String label;
  final bool ativo;

  const ChipAtivoDesativado({super.key, required this.label, required this.ativo});

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
          color: ativo ? const Color.fromRGBO(26, 147, 46, 0.18) : const Color.fromRGBO(238, 32, 28, 0.18),
          borderRadius: BorderRadius.circular(30)
      ),
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 10.0, vertical: 6.0),
        child: Text(
          label,
          style: TextStyle(
            color: ativo ? const Color.fromRGBO(26, 147, 46, 1) : const Color.fromRGBO(238, 32, 28, 1),
            fontWeight: FontWeight.w400,
            fontSize: 14,
          ),
        ),
      ),
    );
  }
}
