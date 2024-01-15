import 'package:flutter/material.dart';
import 'package:validaquero/components/modals/modal_usuario.dart';
import 'package:validaquero/components/texts/chip.dart';
import 'package:validaquero/components/texts/texts.dart';
import 'package:validaquero/models/usuario_list_model.dart';

class CardUsuario extends StatelessWidget {
  const CardUsuario({super.key, required this.usuario});
  final UsuarioList usuario;

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () {
        showModalBottomSheet(
          context: context,
          builder: (BuildContext context) {
            return ModalUsuario(usuario: usuario);
          },
        );
      },
      child: Column(
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              TextTitleBold(
                title: usuario.nome,
                arquivo: true,
              ),
              ChipPerfil(label: usuario.perfil),
            ],
          ),
          Row(
            children: [
              Text(
                usuario.matricula,
                style: const TextStyle(fontSize: 17, color: Colors.black54),
              )
            ],
          ),
          const Padding(
            padding: EdgeInsets.symmetric(vertical: 3.0),
            child: Divider(
              color: Colors.black12,
            ),
          )
        ],
      ),
    );
  }
}
