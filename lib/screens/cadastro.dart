import 'package:flutter/material.dart';
import 'package:validaquero/components/buttons/ColorButton.dart';
import 'package:validaquero/data/perfil.dart';
import 'package:validaquero/themes/app_colors.dart';

class Cadastro extends StatelessWidget {
  const Cadastro({super.key});

  void login(BuildContext context) {
    Navigator.pushReplacementNamed(context, '/login');
  }

  void home(BuildContext context) {
    Navigator.pushReplacementNamed(context, '/home');
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: ThemeColors.fundoPrincipalColor,
      body: SingleChildScrollView(
        child: SizedBox(
          height: MediaQuery.of(context).size.height,
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Padding(
                padding: const EdgeInsets.fromLTRB(10, 35.0, 0, 0),
                child: Image.asset(
                  'assets/images/sr-logo.png',
                  width: 200,
                ),
              ),
              Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const Padding(
                    padding: EdgeInsets.only(left: 12),
                    child: Text(
                      'Faça o cadastro na plataforma',
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
                        hintText: 'Nome completo',
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
                    padding: const EdgeInsets.fromLTRB(12, 8, 12, 0),
                    child: DropdownButtonFormField(
                      isExpanded: true,
                      hint: const Text('Perfil'),
                      icon: const Icon(
                        Icons.arrow_drop_down,
                        color: Colors.black45,
                      ),
                      decoration: const InputDecoration(
                        border: OutlineInputBorder(),
                      ),
                      iconSize: 25,
                      onChanged: (value) {
                        print(value);
                      },
                      items: perfil
                          .map(
                            (perf) => DropdownMenuItem(
                              value: perf,
                              child: Text(perf),
                            ),
                          )
                          .toList(),
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
                  Padding(
                    padding: const EdgeInsets.fromLTRB(12, 12, 12, 0),
                    child: TextFormField(
                      keyboardType: TextInputType.visiblePassword,
                      obscureText: true,
                      decoration: const InputDecoration(
                        border: OutlineInputBorder(),
                        hintText: 'Confirmar senha',
                      ),
                    ),
                  ),
                  ColorButton(
                    color: ThemeColors.secondaryColor,
                    text: 'Cadastrar',
                    function: () {
                      home(context);
                    },
                  ),
                  ColorButton(
                    color: ThemeColors.primaryColor,
                    text: 'Já possui conta?',
                    function: () {
                      login(context);
                    },
                  )
                ],
              ),
              const Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text('ValidaQuero * Quero Quero Tech',
                      style: TextStyle(color: Colors.black, fontSize: 14)),
                ],
              )
            ],
          ),
        ),
      ),
    );
  }
}
