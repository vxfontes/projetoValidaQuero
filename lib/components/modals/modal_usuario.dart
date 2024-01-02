import 'package:flutter/material.dart';
import 'package:validaquero/components/texts/data_help.dart';
import 'package:validaquero/components/texts/texts.dart';
import 'package:validaquero/models/usuario_list_model.dart';
import 'package:validaquero/themes/app_colors.dart';

class ModalUsuario extends StatelessWidget {
  const ModalUsuario({super.key, required this.usuario});

  final UsuarioList usuario;

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 280,
      padding: const EdgeInsets.all(25),
      child: Column(
        children: [
          Row(
            children: [
              Padding(
                padding: const EdgeInsets.only(bottom: 8.0),
                child: Text(
                  usuario.nome,
                  style: const TextStyle(
                    fontSize: 22,
                    fontWeight: FontWeight.w500,
                  ),
                ),
              ),
            ],
          ),
          Row(children: [
            TextNumberLegend(label: 'Matrícula: ', value: usuario.matricula)
          ]),
          Row(children: [
            TextNumberLegend(label: 'Perfil: ', value: usuario.perfil)
          ]),
          Row(children: [
            TextNumberLegend(
                label: 'Verificado: ',
                value: usuario.verificado == true ? "Sim" : "Não")
          ]),
          Row(children: [
            TextNumberLegend(
                label: 'Templates cadastrados: ',
                value:
                    "${usuario.template.ativo}/${usuario.template.ativo + usuario.template.desativado} ativos")
          ]),
          Row(children: [
            TextNumberLegend(
                label: 'Arquivos submetidos: ',
                value:
                "${usuario.arquivo.aprovados} arquivos")
          ]),
          Row(children: [
            Expanded(
              child: Padding(
                padding: const EdgeInsets.only(top: 15),
                child: ElevatedButton(
                  onPressed: () {},
                  style: ElevatedButton.styleFrom(
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(8.0),
                    ),
                    backgroundColor: ThemeColors.primaryColor,
                  ),
                  child: const Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Icon(
                        Icons.restore_from_trash,
                        color: Colors.white,
                      ),
                      SizedBox(width: 8),
                      Text(
                        'Apagar',
                        style: TextStyle(
                          color: Colors.white,
                          fontFamily: 'Roboto',
                          fontWeight: FontWeight.w400,
                          letterSpacing: 1.2,
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            )
          ])
        ],
      ),
    );
  }
}
