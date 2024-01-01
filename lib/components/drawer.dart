import 'package:flutter/material.dart';
import 'package:validaquero/themes/app_colors.dart';

class MainDrawer extends StatelessWidget {
  const MainDrawer({super.key});

  void logout(BuildContext context) {
    Navigator.pushReplacementNamed(context, '/login');
  }

  void home(BuildContext context) {
    Navigator.pushReplacementNamed(context, '/home');
  }

  void usuarios(BuildContext context) {
    Navigator.pushReplacementNamed(context, '/usuarios');
  }

  @override
  Widget build(BuildContext context) {
    return Drawer(
      child: ListView(
        padding: EdgeInsets.zero,
        children: [
          DrawerHeader(
            decoration: const BoxDecoration(
                color: ThemeColors.primaryColor
            ),
            child: Image.asset(
                'assets/images/validaquero.png'
            ),
          ),
          ListTile(
            leading: const Icon(Icons.home, color: ThemeColors.primaryColor),
            title: const Text('Início'),
            onTap: () {
              home(context);
            },
          ),
          ListTile(
            leading: const Icon(Icons.dashboard, color: ThemeColors.primaryColor),
            title: const Text('Dashboard'),
            onTap: () {},
          ),
          ListTile(
            leading: const Icon(Icons.people, color: ThemeColors.primaryColor),
            title: const Text('Usuários'),
            onTap: () {
              usuarios(context);
            },
          ),
          ListTile(
            leading: const Icon(Icons.exit_to_app, color: ThemeColors.primaryColor),
            title: const Text('Sair'),
            onTap: () {
              logout(context);
            },
          ),
        ],
      ),
    );
  }
}
