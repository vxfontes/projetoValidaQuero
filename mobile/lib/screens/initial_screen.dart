import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:validaquero/components/drawer.dart';
import 'package:validaquero/screens/arquivos.dart';
import 'package:validaquero/screens/cadastro_template.dart';
import 'package:validaquero/screens/perfil.dart';
import 'package:validaquero/screens/templates.dart';
import 'package:validaquero/themes/app_colors.dart';

class InitialScreen extends StatefulWidget {
  const InitialScreen({super.key});

  @override
  State<InitialScreen> createState() => _InitialScreenState();
}

class _InitialScreenState extends State<InitialScreen> {
  int _currentPage = 0;
  String nome = '', perfil = '', matricula = '';
  late bool verificado;

  @override
  void initState() {
    getTipoUsuario();
    super.initState();
  }

  void getTipoUsuario() async {
    SharedPreferences.getInstance().then((prefs) {
      String? getnome = prefs.getString('nome');
      String? getperfil = prefs.getString('perfil');
      String? getmatricula = prefs.getString('matricula');
      bool? getverificado = prefs.getBool('verificado');

      if (getnome != null && getperfil != null && getverificado != null) {
        setState(() {
          nome = getnome;
          perfil = getperfil;
          verificado = getverificado;
          matricula = getmatricula!;
        });
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    final List<Map<String, dynamic>> pages = [
      {'widget': const Templates(), 'nome': 'Lista de Templates'},
      {'widget': const Arquivos(), 'nome': 'Arquivos recentes'},
    ];

    return Scaffold(
      appBar: AppBar(
        backgroundColor: ThemeColors.fundoPrincipalColor,
        elevation: 0,
        title: Text(
          pages[_currentPage]['nome'],
          style: const TextStyle(
            fontSize: 22,
            fontWeight: FontWeight.w400,
          ),
        ),
        actions: <Widget>[
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 16.0),
            child: GestureDetector(
              onTap: () {
                Navigator.push(context,
                    MaterialPageRoute(builder: (context) => MeuPerfil()));
              },
              child: const Icon(
                Icons.account_circle,
                size: 32,
              ),
            ),
          )
        ],
      ),
      backgroundColor: ThemeColors.fundoPrincipalColor,
      bottomNavigationBar: BottomNavigationBar(
        backgroundColor: ThemeColors.fundoPrincipalColor,
        items: const [
          BottomNavigationBarItem(
            icon: Icon(Icons.folder_copy),
            label: 'Templates',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.file_copy),
            label: 'Arquivos',
          ),
        ],
        selectedItemColor: ThemeColors.primaryColor,
        currentIndex: _currentPage,
        onTap: (index) {
          setState(() {
            _currentPage = index;
          });
        },
      ),
      body: pages[_currentPage]['widget'],
      drawer: const MainDrawer(),
      floatingActionButton: (perfil == 'Gestor' || perfil == 'Gerente')
          ? FloatingActionButton.extended(
              backgroundColor: ThemeColors.primaryColor,
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (context) =>
                        CadastroTemplate(matricula: matricula),
                  ),
                );
              },
              label:
                  const Text('Template', style: TextStyle(color: Colors.white)),
              icon: const Icon(Icons.add, color: Colors.white),
            )
          : null,
    );
  }
}
