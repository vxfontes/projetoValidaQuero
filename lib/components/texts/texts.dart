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
          TextSpan(
            text: value,
            style: const TextStyle(color: Colors.black),
          ),
        ],
        style: const TextStyle(
          color: Colors.black45,
          fontSize: 17,
        ),
      ),
      textAlign: value.length > 200 ? TextAlign.justify : TextAlign.left,
    );
  }
}

// texto - 0/0 ativos
class TextAtivo extends StatelessWidget {
  final String value1, value2, label;

  const TextAtivo({super.key, required this.label, required this.value1, required this.value2});

  @override
  Widget build(BuildContext context) {

    return Text.rich(
      TextSpan(
        text: value1,
        children: [
          TextSpan(
            text: ' / $value2 $label',
            style: const TextStyle(fontSize: 17),
          ),
        ],
        style: const TextStyle(
          color: Colors.black,
          fontSize: 24,
        ),
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

// texto maior
class TextTitleBig extends StatelessWidget {
  const TextTitleBig({super.key, required this.title});

  final String title;

  @override
  Widget build(BuildContext context) {
    return ConstrainedBox(
      constraints: const BoxConstraints(
        minWidth: 70,
        maxWidth: 270,
      ),
      child: Text(
        title,
        overflow: TextOverflow.ellipsis,
        maxLines: 1,
        style: const TextStyle(fontSize: 21),
      ),
    );
  }
}
