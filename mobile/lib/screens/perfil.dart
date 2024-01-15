import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:validaquero/components/cards/card_perfil.dart';
import 'package:validaquero/components/texts/texts.dart';
import 'package:validaquero/models/usuario_list_model.dart';
import 'package:validaquero/services/usuario.dart';
import 'package:validaquero/themes/app_colors.dart';

class MeuPerfil extends StatefulWidget {
  MeuPerfil({Key? key});

  @override
  State<MeuPerfil> createState() => _MeuPerfilState();
}

class _MeuPerfilState extends State<MeuPerfil> {
  final UsuarioService usuarioService = UsuarioService();
  late UsuarioList usuario;
  bool isLoading = true;

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    _loadData();
  }

  Future<void> _loadData() async {
    SharedPreferences prefs = await SharedPreferences.getInstance();
    String matricula = prefs.getString('matricula') ?? '';

    try {
      final response = await usuarioService.getOne(matricula);
      setState(() {
        usuario = UsuarioList.fromJson(response['usuario']);
        isLoading = false;
      });
    } catch (error) {
      print('Erro ao obter usuário: $error');
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Perfil'),
        backgroundColor: ThemeColors.fundoComponenteColor,
      ),
      backgroundColor: ThemeColors.fundoPrincipalColor,
      body: Column(
        children: [
          isLoading
              ? SizedBox(
                  height: MediaQuery.of(context).size.height * 0.7,
                  child: const Center(
                    child: CircularProgressIndicator(
                      color: ThemeColors.primaryColor,
                    ),
                  ),
                )
              : Column(
                  children: [
                    Padding(
                      padding: const EdgeInsets.all(10.0),
                      child: Container(
                        width: MediaQuery.of(context).size.width * 0.94,
                        padding: const EdgeInsets.symmetric(
                            horizontal: 16.0, vertical: 12.0),
                        decoration: BoxDecoration(
                          color: ThemeColors.fundoComponenteColor,
                          borderRadius: BorderRadius.circular(10),
                        ),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(usuario.nome,
                                style: const TextStyle(fontSize: 24)),
                            TextNumberLegend(
                                label: 'Matrícula: ', value: usuario.matricula),
                            TextNumberLegend(
                                label: 'Perfil: ', value: usuario.perfil),
                          ],
                        ),
                      ),
                    ),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                      children: [
                        CardPerfilInfo(
                          legend: 'Seus templates',
                          label: 'ativos',
                          value1: usuario.template.ativo.toString(),
                          value2: (usuario.template.ativo +
                                  usuario.template.desativado)
                              .toString(),
                        ),
                        CardPerfilInfo(
                          legend: 'Seus arquivos',
                          label: 'aprovados',
                          value1: usuario.arquivo.aprovados.toString(),
                          value2: (usuario.arquivo.aprovados +
                                  usuario.arquivo.naoaprovados)
                              .toString(),
                        ),
                      ],
                    ),
                  ],
                ),
        ],
      ),
    );
  }
}
