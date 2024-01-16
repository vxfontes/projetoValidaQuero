import 'dart:convert';
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
    file,
    String titulo,
    String usuario,
    bool publico,
    String repositorio,
    int template,
    String formato,
    campos,
  ) async {
    print('ENTREI NO PYTHON');
    var formDataMap = Map<String, dynamic>();
    formDataMap['file'] = file;
    formDataMap['titulo'] = titulo;
    formDataMap['usuario'] = usuario;
    formDataMap['publico'] = publico.toString();
    formDataMap['template'] = template.toString();
    formDataMap['verify'] = 'true';
    formDataMap['repositorio'] = repositorio;
    formDataMap['formato'] = formato;

    http.Response response = await client.post(
      Uri.parse("${url}file/upload/"),
      body: formDataMap,
    );

    print(response.body);

    return json.decode(response.body);
  }
}
