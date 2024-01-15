import 'package:flutter/material.dart';
import 'package:validaquero/components/SnackBars.dart';
import 'package:validaquero/components/buttons/ColorButton.dart';
import 'package:validaquero/data/perfil.dart';
import 'package:validaquero/services/usuario.dart';
import 'package:validaquero/themes/app_colors.dart';
import 'package:validaquero/utils/valueValidator.dart';

// ignore: must_be_immutable
class Cadastro extends StatelessWidget {
  Cadastro({super.key});

  final _formKey = GlobalKey<FormState>();

  TextEditingController nomeController = TextEditingController();
  TextEditingController matriculaController = TextEditingController();
  TextEditingController senhaController = TextEditingController();
  TextEditingController confirmarSenhaController = TextEditingController();
  String perfilController = '';

  void login(BuildContext context) {
    Navigator.pushReplacementNamed(context, '/login');
  }

  void home(BuildContext context) async {
    if (senhaController.text != confirmarSenhaController.text) {
      senhaController.clear();
      confirmarSenhaController.clear();
      showSnackBar(context, 'As senhas não coincidem');
      return;
    }

    if (perfilController == '') {
      showSnackBar(context, 'Selecione o seu perfil');
      return;
    }

    UsuarioService usuarioService = UsuarioService();
    final response = await usuarioService.register(
      nomeController.text,
      matriculaController.text,
      senhaController.text,
      perfilController,
    );

    if (response['status'] == 'error') {
      matriculaController.clear();
      senhaController.clear();
      confirmarSenhaController.clear();
      String errorMessage = response['message'];

      showSnackBar(context, errorMessage);
    } else {
      showSnackBar(context, 'Cadastro realizado com sucesso!');
      Navigator.pushReplacementNamed(context, '/home');
    }
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
              Form(
                key: _formKey,
                child: Column(
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
                        controller: nomeController,
                        validator: (String? value) {
                          if (valueValidator(value)) {
                            return 'Insira a seu nome completo';
                          }
                          return null;
                        },
                        decoration: const InputDecoration(
                          border: OutlineInputBorder(),
                          hintText: 'Nome completo',
                        ),
                      ),
                    ),
                    Padding(
                      padding: const EdgeInsets.fromLTRB(12, 8, 12, 0),
                      child: TextFormField(
                        controller: matriculaController,
                        keyboardType: TextInputType.number,
                        validator: (String? value) {
                          if (valueValidator(value)) {
                            return 'Insira a sua matrícula';
                          }
                          return null;
                        },
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
                          perfilController = value.toString();
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
                        controller: senhaController,
                        validator: (String? value) {
                          if (valueValidator(value)) {
                            return 'Insira a sua senha';
                          }
                          return null;
                        },
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
                        controller: confirmarSenhaController,
                        validator: (String? value) {
                          if (valueValidator(value)) {
                            return 'Confirme a sua senha';
                          }
                          return null;
                        },
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
                        if (_formKey.currentState!.validate()) {
                          home(context);
                        }
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
