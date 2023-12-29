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

class TextTableCard extends StatelessWidget {
  const TextTableCard({super.key, required this.text});

  final String text;

  @override
  Widget build(BuildContext context) {
    return SliverToBoxAdapter(
        child: Padding(
          padding: const EdgeInsets.only(bottom: 8.0),
          child: Text(
                text,
                style: const TextStyle(
          fontWeight: FontWeight.w500,
          fontSize: 20,
          color: Colors.black,
                ),
              ),
        ));
  }
}
