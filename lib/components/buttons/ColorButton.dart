import 'package:flutter/material.dart';

class ColorButton extends StatelessWidget {
  final Color color;
  final Function function;
  final String text;

  const ColorButton({super.key, required this.color, required this.text, required this.function});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.fromLTRB(12, 8, 12, 0),
      child: ElevatedButton(
        onPressed: () {
          function();
        },
        style: ElevatedButton.styleFrom(
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(8.0),
          ),
          minimumSize: const Size(double.infinity, 45),
          backgroundColor: color,
        ),
        child: Text(
          text.toUpperCase(),
          style: const TextStyle(
            color: Colors.white,
            fontFamily: 'Roboto',
            fontWeight: FontWeight.w400,
            letterSpacing: 1.2,
          ),
        ),
      ),
    );
  }
}
