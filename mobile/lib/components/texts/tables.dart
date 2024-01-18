import 'package:flutter/material.dart';
import 'package:validaquero/models/template_model.dart';

class TabelaCampos extends StatelessWidget {
  final List<Campo> campos;

  const TabelaCampos({super.key, required this.campos});

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        const Padding(
          padding: EdgeInsets.only(top: 8.0),
          child: Text(
            'Campos do template',
            style: TextStyle(fontSize: 18, fontWeight: FontWeight.w500),
          ),
        ),
        DataTable(
          columns: const [
            DataColumn(label: Text('Nome')),
            // DataColumn(label: Text('Nulo')),
            DataColumn(label: Text('Tipo')),
          ],
          rows: campos
              .map(
                (campo) => DataRow(
                  cells: [
                    DataCell(Text(campo.nome)),
                    // DataCell(Text(campo.nulo ? 'Sim' : 'Não')),
                    DataCell(Text(campo.tipo)),
                  ],
                ),
              )
              .toList(),
        ),
      ],
    );
  }
}
