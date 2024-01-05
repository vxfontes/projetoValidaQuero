import 'package:flutter/material.dart';
import 'package:validaquero/screens/cadastro.dart';
import 'package:validaquero/screens/initial_screen.dart';
import 'package:validaquero/screens/login.dart';
import 'package:validaquero/screens/usuarios.dart';
import 'package:validaquero/themes/main_theme.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'ValidaQuero',
      theme: MainTheme,
      initialRoute: '/login',
      routes: {
        "/login": (context) => Login(),
        "/cadastro": (context) => Cadastro(),
        "/usuarios": (context) => const Usuarios(),
        "/home": (context) => const InitialScreen(),
      },
    );
  }
}
