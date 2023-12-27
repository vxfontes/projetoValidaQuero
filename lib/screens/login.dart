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
          crossAxisAlignment: CrossAxisAlignment.start,
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Padding(
              padding: const EdgeInsets.only(top: 25.0),
              child: Image.asset(
                'assets/images/validaquero.png',
                width: 200,
              ),
            ),
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Padding(
                  padding: EdgeInsets.only(left: 12),
                  child: Text(
                    'Informe suas credenciais',
                    style: TextStyle(
                      fontWeight: FontWeight.w700,
                      fontSize: 16,
                    ),
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.fromLTRB(12, 8, 12, 0),
                  child: TextFormField(
                    decoration: const InputDecoration(
                      border: OutlineInputBorder(),
                      hintText: 'Matrícula',
                    ),
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.fromLTRB(12, 12, 12, 0),
                  child: TextFormField(
                    keyboardType: TextInputType.visiblePassword,
                    obscureText: true,
                    decoration: const InputDecoration(
                      border: OutlineInputBorder(),
                      hintText: 'Senha',
                    ),
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
            const Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Text('ValidaQuero * Quero Quero Tech', style: TextStyle(color: Colors.black, fontSize: 14)),
              ],
            )
          ],
        ),
      ),
    );
  }
}
