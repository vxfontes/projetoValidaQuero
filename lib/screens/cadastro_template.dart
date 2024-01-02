import 'package:flutter/material.dart';
import 'package:validaquero/themes/app_colors.dart';

class CadastroTemplate extends StatelessWidget {
  const CadastroTemplate({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Cadastrar template'),
        backgroundColor: ThemeColors.fundoComponenteColor,
      ),
      backgroundColor: ThemeColors.fundoPrincipalColor,
    );
  }
}
