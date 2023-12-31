import 'package:flutter/material.dart';

// texto - Nome: informação
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

// texto titulo
class TextTitleBold extends StatelessWidget {
  const TextTitleBold({super.key, required this.title, required this.arquivo});

  final String title;
  final bool arquivo;

  @override
  Widget build(BuildContext context) {
    return ConstrainedBox(
      constraints: BoxConstraints(
        minWidth: 70,
        maxWidth: arquivo == true ? 210 : 270,
      ),
      child: Text(
        title,
        overflow: TextOverflow.ellipsis,
        maxLines: 1,
        style: const TextStyle(fontSize: 21, fontWeight: FontWeight.w500),
      ),
    );
  }
}
