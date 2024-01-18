import 'dart:convert';
import 'package:file_picker/file_picker.dart';
import 'package:validaquero/models/template_model.dart';
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
      List<Campo> campos,
  ) async {

    List<Map<String, dynamic>> camposJson = campos.map((campo) => {
      'nome': campo.nome,
      'nulo': campo.nulo,
      'tipo': campo.tipo,
    }).toList();

    try {
      var formData = http.MultipartRequest(
        'POST',
        Uri.parse("${python}file/upload"),
      );

      formData.files.add(
        await http.MultipartFile.fromPath('file', file.files.single.path!),
      );

      formData.fields['titulo'] = titulo;
      formData.fields['usuario'] = usuario;
      formData.fields['publico'] = publico.toString();
      formData.fields['template'] = template.toString();
      formData.fields['verify'] = 'true';
      formData.fields['repositorio'] = repositorio;
      formData.fields['formato'] = formato;
      formData.fields['campos'] = jsonEncode(camposJson);

      http.Response response = await http.Response.fromStream(await formData.send());

      print('Resposta do servidor: ${response.body}');
      return json.decode(response.body);
    } catch (e) {
      print('Erro durante o envio do arquivo: $e');
      return json.decode(e.toString());
    }
  }
}
