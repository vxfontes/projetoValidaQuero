import 'package:flutter/material.dart';
import 'package:validaquero/components/cards/card_usuario.dart';
import 'package:validaquero/components/drawer.dart';
import 'package:validaquero/data/usuarios.dart';
import 'package:validaquero/themes/app_colors.dart';

class Usuarios extends StatelessWidget {
  const Usuarios({super.key});

  @override
  Widget build(BuildContext context) {
    final List usuarioList = usuariosList;

    return Scaffold(
      appBar: AppBar(
        backgroundColor: ThemeColors.fundoPrincipalColor,
        elevation: 0,
        title: const Text(
          'Usuários cadastrados',
          style: TextStyle(
            fontSize: 22,
            fontWeight: FontWeight.w400,
          ),
        ),
        actions: const <Widget>[
          Padding(
            padding: EdgeInsets.symmetric(horizontal: 16.0),
            child: Icon(
              Icons.account_circle,
              size: 32,
            ),
          )
        ],
      ),
      backgroundColor: ThemeColors.fundoPrincipalColor,
      drawer: const MainDrawer(),
      body: Padding(
        padding: const EdgeInsets.all(14.0),
        child: Container(
          padding: const EdgeInsets.all(20),
          decoration: BoxDecoration(
            color: ThemeColors.fundoComponenteColor,
            borderRadius: BorderRadius.circular(10),
          ),
          child: CustomScrollView(
            slivers: [
              SliverList(
                delegate: SliverChildBuilderDelegate(
                      (context, index) {
                    return CardUsuario(
                      usuario: usuarioList[index],
                    );
                  },
                  childCount: usuarioList.length,
                ),
              )
            ],
          ),
        ),
      )
    );
  }
}
