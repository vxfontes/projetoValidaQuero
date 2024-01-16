import 'dart:convert';
import 'package:file_picker/file_picker.dart';
import 'package:validaquero/services/webclient.dart';
import 'package:http/http.dart' as http;

class ArquivoService {
  String url = WebClient.url;
  String python = WebClient.python;

  http.Client client = WebClient().client;

  Future<Map<String, dynamic>> getAll() async {
    http.Response response = await client.get(
      Uri.parse("${url}arquivo"),
    );

    return json.decode(response.body);
  }

  Future<Map<String, dynamic>> uploadFile(
    FilePickerResult file,
    String titulo,
    String usuario,
    bool publico,
    String repositorio,
    int template,
    String formato,
    campos,
  ) async {
    print('ENTREI NO PYTHON');

    var formData = http.MultipartRequest(
      'POST',
      Uri.parse("${python}file/upload/"),
    );

    formData.files.add(http.MultipartFile.fromBytes(
      'file',
      file.files.single.bytes!,
      filename: file.files.single.name,
    ));

    formData.fields['titulo'] = titulo;
    formData.fields['usuario'] = usuario;
    formData.fields['publico'] = publico.toString();
    formData.fields['template'] = template.toString();
    formData.fields['verify'] = 'true';
    formData.fields['repositorio'] = repositorio;
    formData.fields['formato'] = formato;

    try {
      http.Response response = await http.Response.fromStream(await formData.send());

      print('Resposta do servidor: ${response.body}');
      return json.decode(response.body);
    } catch (e) {
      print('Erro durante o envio do arquivo: $e');
      return json.decode(e.toString());
    }
  }
}
