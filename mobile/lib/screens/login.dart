import 'package:flutter/material.dart';
import 'package:validaquero/components/SnackBars.dart';
import 'package:validaquero/components/buttons/ColorButton.dart';
import 'package:validaquero/services/usuario.dart';
import 'package:validaquero/themes/app_colors.dart';
import 'package:validaquero/utils/valueValidator.dart';

// ignore: must_be_immutable
class Login extends StatelessWidget {
  Login({super.key});

  TextEditingController matriculaController = TextEditingController();
  TextEditingController senhaController = TextEditingController();

  final _formKey = GlobalKey<FormState>();

  void cadastro(BuildContext context) {
    Navigator.pushReplacementNamed(context, '/cadastro');
  }

  void home(BuildContext context) async {
    UsuarioService usuarioService = UsuarioService();
    final response = await usuarioService.login(
        matriculaController.text, senhaController.text);

    if (response['status'] == 'error') {
      matriculaController.clear();
      senhaController.clear();
      String errorMessage = response['message'];

      showSnackBar(context, errorMessage);
    } else {
      showSnackBar(context, 'Login realizado com sucesso!');
      Navigator.pushReplacementNamed(context, '/home');
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        color: ThemeColors.fundoPrincipalColor,
        child: Form(
          key: _formKey,
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
                      keyboardType: TextInputType.number,
                      controller: matriculaController,
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
                    padding: const EdgeInsets.fromLTRB(12, 12, 12, 0),
                    child: TextFormField(
                      keyboardType: TextInputType.visiblePassword,
                      controller: senhaController,
                      obscureText: true,
                      validator: (String? value) {
                        if (valueValidator(value)) {
                          return 'Insira a sua senha';
                        }
                        return null;
                      },
                      decoration: const InputDecoration(
                        border: OutlineInputBorder(),
                        hintText: 'Senha',
                      ),
                    ),
                  ),
                  ColorButton(
                    color: ThemeColors.secondaryColor,
                    text: 'login',
                    function: () {
                      if (_formKey.currentState!.validate()) {
                        home(context);
                      }
                    },
                  ),
                  ColorButton(
                    color: ThemeColors.primaryColor,
                    text: 'se cadastre',
                    function: () {
                      cadastro(context);
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
