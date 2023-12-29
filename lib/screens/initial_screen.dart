import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:validaquero/components/cards/card_template.dart';
import 'package:validaquero/themes/app_colors.dart';

class InitialScreen extends StatelessWidget {
  const InitialScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: ThemeColors.fundoPrincipalColor,
        elevation: 0,
        title: const Text(
          'ValidaQuero Hub',
          style: TextStyle(
            fontSize: 22,
            fontWeight: FontWeight.w400,
          ),
        ),
      ),
      backgroundColor: ThemeColors.fundoPrincipalColor,
      body: SizedBox(
        width: MediaQuery.of(context).size.width,
        child: const Column(
          children: [
            CardTemplate(
              title: 'Template de vendas',
              autor: 'Vanessa Fontes',
              formato: 'XLSX',
              colunas: 24,
              status: 'Ativo',
            ),
            CardTemplate(
              title: 'Template de vendas',
              autor: 'Vanessa Fontes',
              formato: 'XLSX',
              colunas: 24,
              status: 'Desativado',
            ),
            CardTemplate(
              title: 'Template de vendas',
              autor: 'Vanessa Fontes',
              formato: 'XLSX',
              colunas: 24,
              status: 'Ativo',
            ),
          ],
        ),
      ),
    );
  }
}
