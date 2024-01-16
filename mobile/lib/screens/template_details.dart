import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:validaquero/components/modals/modal_upload.dart';
import 'package:validaquero/components/texts/chip.dart';
import 'package:validaquero/components/texts/tables.dart';
import 'package:validaquero/components/texts/texts.dart';
import 'package:validaquero/models/template_model.dart';
import 'package:validaquero/themes/app_colors.dart';
import 'package:validaquero/utils/data_help.dart';

class TemplateDetails extends StatefulWidget {
  const TemplateDetails({super.key, required this.template});

  final Template template;

  @override
  State<TemplateDetails> createState() => _TemplateDetailsState();
}

class _TemplateDetailsState extends State<TemplateDetails> {
  String perfil = '', matricula = '';

  @override
  void initState() {
    getTipoUsuario();
    super.initState();
  }

  void getTipoUsuario() async {
    SharedPreferences.getInstance().then((prefs) {
      String? getperfil = prefs.getString('perfil');
      String? getmatricula = prefs.getString('matricula');

      if (getperfil != null) {
        setState(() {
          perfil = getperfil;
          matricula = getmatricula!;
        });
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.template.titulo),
        backgroundColor: ThemeColors.fundoComponenteColor,
      ),
      backgroundColor: ThemeColors.fundoPrincipalColor,
      body: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.all(15.0),
          child: Container(
            padding: const EdgeInsets.all(14.0),
            decoration: BoxDecoration(
              color: ThemeColors.fundoComponenteColor,
              borderRadius: BorderRadius.circular(10),
            ),
            child: Column(
              children: [
                Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: TextTitleBig(title: widget.template.titulo),
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                  children: [
                    ChipAtivoDesativado(
                      label: widget.template.status,
                      ativo: widget.template.status == 'Ativo' ? true : false,
                    ),
                    ChipPink(label: widget.template.formato),
                  ],
                ),
                Padding(
                  padding: const EdgeInsets.all(10.0),
                  child: TextNumberLegend(
                    label: 'Descrição ',
                    value: widget.template.descricao,
                  ),
                ),
                TabelaCampos(campos: widget.template.campos),
                Padding(
                  padding: const EdgeInsets.all(15.0),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    crossAxisAlignment: CrossAxisAlignment.center,
                    children: [
                      Row(
                        children: [
                          const Padding(
                            padding: EdgeInsets.only(right: 8.0),
                            child: Icon(Icons.account_circle_outlined),
                          ),
                          Text(widget.template.usuario.nome),
                        ],
                      ),
                      Column(children: [
                        const Text('Data de criação'),
                        Text(dataHelp(
                            DateTime.parse(widget.template.dataCriacao))),
                      ])
                    ],
                  ),
                ),
                Center(
                  child: ElevatedButton(
                    onPressed: () {
                      showModalBottomSheet(
                        context: context,
                        builder: (BuildContext context) {
                          return ModalUpload(
                            usuario: matricula,
                            campos: widget.template.campos,
                            formato: widget.template.formato,
                            template: widget.template.id,
                          );
                        },
                      );
                    },
                    style: ElevatedButton.styleFrom(
                      backgroundColor: ThemeColors.primaryColor,
                    ),
                    child: const Row(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        Icon(
                          Icons.cloud_upload,
                          color: Colors.white,
                        ),
                        SizedBox(width: 8),
                        Text(
                          'Upload de arquivo',
                          style: TextStyle(color: Colors.white),
                        ),
                      ],
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
