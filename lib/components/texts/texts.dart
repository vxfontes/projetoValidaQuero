import 'package:flutter/material.dart';

class TextNumberLegend extends StatelessWidget {
  final String label, value;
  const TextNumberLegend({super.key, required this.label, required this.value});

  @override
  Widget build(BuildContext context) {
    return Text.rich(
      TextSpan(
        text: label,
        children: [
          TextSpan(text: value, style: const TextStyle(color: Colors.black)),
        ],
        style: const TextStyle(color: Colors.black45, fontSize: 17),
      ),
    );
  }
}
