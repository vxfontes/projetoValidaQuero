import 'package:file_picker/file_picker.dart';
import 'package:flutter/material.dart';
import 'package:validaquero/components/SnackBars.dart';
import 'package:validaquero/components/texts/texts.dart';
import 'package:validaquero/services/arquivo.dart';
import 'package:validaquero/themes/app_colors.dart';
import 'package:validaquero/utils/valueValidator.dart';

class ModalUpload extends StatefulWidget {
  const ModalUpload(
      {super.key, this.usuario, this.template, this.formato, this.campos});

  final usuario, template, formato, campos;

  @override
  State<ModalUpload> createState() => _ModalUploadState();
}

class _ModalUploadState extends State<ModalUpload> {
  final nomeArquivo = TextEditingController();

  var servidor = '';

  var file;
  var message = '';
  bool isChecked = true;

  @override
  Widget build(BuildContext context) {
    void sendFile(FilePickerResult? result) {
      if (result != null) {
        file = result;
      }
    }

    void sendToApi() {
        if (file != null && servidor != '') {
          ArquivoService()
              .uploadFile(
            file,
            nomeArquivo.text,
            widget.usuario,
            isChecked,
            servidor,
            widget.template,
            widget.formato,
            widget.campos,
          )
              .then((value) {
            message = '';
            if (value.isNotEmpty) {
              if(value['status'] != 'error') {
                Navigator.pop(context);
                showSnackBar(context, value['message']);
              } else {
                setState(() {
                  message = value['message'];
                });
              }
            }
          });
        } else {
          setState(() {
            message = 'Preencha todos os campos';
          });
        }
    }

    return Container(
      height: 900,
      padding: const EdgeInsets.all(25),
      child: Column(
        children: [
          const TextTitleBig(title: 'Upload de arquivo'),
          message != ''
              ? Text(
                message,
                style: const TextStyle(color: Colors.red),
              )
              : Container(),
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
              hint: const Text('Local de armazenamento'),
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
            mainAxisAlignment: MainAxisAlignment.center,
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
            padding: const EdgeInsets.symmetric(vertical: 10.0),
            child: Column(
              children: [
                Center(
                  child: ElevatedButton(
                    onPressed: file == null
                        ? () async {
                            FilePickerResult? result =
                                await FilePicker.platform.pickFiles();

                            sendFile(result);
                          }
                        : null,
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
                Padding(
                  padding: const EdgeInsets.only(top: 6.0),
                  child: Text(
                      file != null ? 'Arquivo selecionado com sucesso!' : ''),
                ),
              ],
            ),
          ),
          Row(
            children: [
              Expanded(
                child: Padding(
                  padding: const EdgeInsets.only(top: 15),
                  child: ElevatedButton(
                    onPressed: () {
                      sendToApi();
                    },
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
