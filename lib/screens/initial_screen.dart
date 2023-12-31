import 'package:flutter/material.dart';
import 'package:validaquero/screens/arquivos.dart';
import 'package:validaquero/screens/templates.dart';
import 'package:validaquero/themes/app_colors.dart';

class InitialScreen extends StatefulWidget {
  const InitialScreen({super.key});

  @override
  State<InitialScreen> createState() => _InitialScreenState();
}

class _InitialScreenState extends State<InitialScreen> {
  int _currentPage = 0;

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
    );
  }
}
