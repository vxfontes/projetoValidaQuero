import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:validaquero/components/buttons/ColorButton.dart';
import 'package:validaquero/themes/app_colors.dart';

class Login extends StatelessWidget {
  const Login({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        color: ThemeColors.fundoPrincipalColor,
        child: Column(
          children: [
            Image.asset(
              'assets/images/validaquero.png',
              width: 200,
            ),
            const Text(
              'Informe suas credenciais',
              style: TextStyle(
                fontWeight: FontWeight.w700,
                fontSize: 16,
              ),
            ),
            TextFormField(
              decoration: const InputDecoration(
                border: OutlineInputBorder(),
                hintText: 'Matrícula',
              ),
            ),
            TextFormField(
              keyboardType: TextInputType.visiblePassword,
              obscureText: true,
              decoration: const InputDecoration(
                border: OutlineInputBorder(),
                hintText: 'Senha',
              ),
            ),
            const ColorButton(
              color: ThemeColors.secondaryColor,
              text: 'login',
            ),
            const ColorButton(
              color: ThemeColors.primaryColor,
              text: 'se cadastre',
            )
          ],
        ),
      ),
    );
  }
}
