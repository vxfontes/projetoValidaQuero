import 'package:flutter/material.dart';
import 'package:validaquero/components/texts/texts.dart';
import 'package:validaquero/themes/app_colors.dart';
import 'package:validaquero/utils/valueValidator.dart';

class ModalUpload extends StatefulWidget {
  ModalUpload({super.key});

  @override
  State<ModalUpload> createState() => _ModalUploadState();
}

class _ModalUploadState extends State<ModalUpload> {
  final nomeArquivo = TextEditingController();

  var servidor = '';

  bool isChecked = true;

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 440,
      width: MediaQuery.of(context).size.width,
      padding: const EdgeInsets.all(25),
      child: Column(
        children: [
          const TextTitleBig(title: 'Upload de arquivo'),
          TextFormField(
            controller: nomeArquivo,
            validator: (String? value) {
              if (valueValidator(value)) {
                return 'Insira o título do template';
              }
              return null;
            },
            decoration: const InputDecoration(
              labelText: 'Nome do arquivo',
            ),
          ),
          Padding(
            padding: const EdgeInsets.symmetric(vertical: 16.0),
            child: DropdownButtonFormField(
              isExpanded: true,
              hint: const Text('Perfil'),
              icon: const Icon(
                Icons.arrow_drop_down,
                color: Colors.black45,
              ),
              iconSize: 25,
              onChanged: (value) {
                servidor = value.toString();
              },
              items: const [
                DropdownMenuItem(
                  value: 'principal',
                  child: Text('Servidor principal'),
                ),
                DropdownMenuItem(
                  value: 'secundario',
                  child: Text('Servidor secundário'),
                ),
                DropdownMenuItem(
                  value: 'temporario',
                  child: Text('Servidor temporário'),
                ),
              ],
            ),
          ),
          Row(
            children: [
              Checkbox(
                activeColor: ThemeColors.primaryColor,
                value: isChecked,
                onChanged: (value) {
                  setState(() {
                    isChecked = value ?? false;
                  });
                },
              ),
              const Text('Deseja manter o arquivo público?'),
            ],
          ),
          Padding(
            padding: const EdgeInsets.all(16.0),
            child: Center(
              child: ElevatedButton(
                onPressed: () {
                  showModalBottomSheet(
                    context: context,
                    builder: (BuildContext context) {
                      return ModalUpload();
                    },
                  );
                },
                style: ElevatedButton.styleFrom(
                  backgroundColor: ThemeColors.secondaryColor,
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
          ),
          Row(
            children: [
              Expanded(
                child: Padding(
                  padding: const EdgeInsets.only(top: 15),
                  child: ElevatedButton(
                    onPressed: () {},
                    style: ElevatedButton.styleFrom(
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(8.0),
                      ),
                      backgroundColor: ThemeColors.primaryColor,
                    ),
                    child: const Text(
                      'Continue',
                      style: TextStyle(
                        color: Colors.white,
                        fontFamily: 'Roboto',
                        fontWeight: FontWeight.w400,
                        letterSpacing: 1.2,
                      ),
                    ),
                  ),
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }
}
