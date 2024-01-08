import 'package:flutter/material.dart';
import 'package:validaquero/components/SnackBars.dart';
import 'package:validaquero/components/cards/card_usuario.dart';
import 'package:validaquero/components/drawer.dart';
import 'package:validaquero/models/usuario_list_model.dart';
import 'package:validaquero/services/usuario.dart';
import 'package:validaquero/themes/app_colors.dart';

class Usuarios extends StatefulWidget {
  const Usuarios({super.key});

  @override
  State<Usuarios> createState() => _UsuariosState();
}

class _UsuariosState extends State<Usuarios> {
  final UsuarioService usuarioService = UsuarioService();
  List<UsuarioList> usuariosList = [];
  List<UsuarioList> filteredList = [];
  bool isLoading = true;

  @override
  void initState() {
    super.initState();
    fetchUsuarios();
  }

  void fetchUsuarios() async {
    final response = await usuarioService.getAll();

    if (response["status"] == "success") {
      List<dynamic> usuarioDataList = response["usuarios"];

      List<UsuarioList> usuarios =
          usuarioDataList.map((arq) => UsuarioList.fromJson(arq)).toList();

      setState(() {
        usuariosList = usuarios;
        filteredList = usuariosList;
        isLoading = false;
      });
    } else {
      showSnackBar(context, response['message']);
    }
  }

  void filterUsuarios(String query) {
    filteredList = usuariosList;
    setState(() {
      filteredList = filteredList
          .where(
              (user) => user.nome.toLowerCase().contains(query.toLowerCase()))
          .toList();
    });
  }

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
        drawer: const MainDrawer(),
        body: Padding(
          padding: const EdgeInsets.all(14.0),
          child: Container(
            padding: const EdgeInsets.symmetric(horizontal: 20),
            decoration: BoxDecoration(
              color: ThemeColors.fundoComponenteColor,
              borderRadius: BorderRadius.circular(10),
            ),
            child: CustomScrollView(
              slivers: [
                SliverToBoxAdapter(
                  child: Padding(
                    padding: const EdgeInsets.only(
                        top: 14, bottom: 24, left: 0, right: 0),
                    child: TextField(
                      onChanged: filterUsuarios,
                      decoration: const InputDecoration(
                        icon: Icon(Icons.search),
                        hintText: 'Buscar usuários pelo nome...',
                      ),
                    ),
                  ),
                ),
                isLoading
                    ? SliverToBoxAdapter(
                        child: SizedBox(
                          height: MediaQuery.of(context).size.height * 0.7,
                          child: const Center(
                            child: CircularProgressIndicator(
                              color: ThemeColors.primaryColor,
                            ),
                          ),
                        ),
                      )
                    : SliverList(
                        delegate: SliverChildBuilderDelegate(
                          (context, index) {
                            return CardUsuario(
                              usuario: filteredList[index],
                            );
                          },
                          childCount: filteredList.length,
                        ),
                      )
              ],
            ),
          ),
        ));
  }
}
