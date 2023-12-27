import 'package:flutter/material.dart';

class ColorButton extends StatelessWidget {
  final Color color;
  final String text;

  const ColorButton({super.key, required this.color, required this.text});

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: () {},
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
    );
  }
}
