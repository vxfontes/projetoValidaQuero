import 'package:flutter/material.dart';
import 'package:validaquero/components/drawer.dart';
import 'package:validaquero/themes/app_colors.dart';

class Usuarios extends StatelessWidget {
  const Usuarios({super.key});

  @override
  Widget build(BuildContext context) {
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
        body: Container(),
        drawer: const MainDrawer()
    );
  }
}
