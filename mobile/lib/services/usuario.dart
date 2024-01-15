import 'dart:convert';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:validaquero/services/webclient.dart';
import 'package:http/http.dart' as http;

class UsuarioService {
  String url = WebClient.url;
  http.Client client = WebClient().client;

  Future<Map<String, dynamic>> getAll() async {
    http.Response response = await client.get(
      Uri.parse("${url}users"),
    );

    return json.decode(response.body);
  }

  Future<Map<String, dynamic>> getOne(String matricula) async {
    http.Response response = await client.get(
      Uri.parse("${url}users/$matricula"),
    );

    return json.decode(response.body);
  }

  Future<Map<String, dynamic>> login(String matricula, String senha) async {
    http.Response response = await client.post(
      Uri.parse("${url}users/login"),
      body: {"matricula": matricula, "senha": senha},
    );

    if (response.statusCode != 201) {
      return json.decode(response.body);
    } else {
      saveInfosFromResponse(response.body);
      return json.decode(response.body);
    }
  }

  Future<Map<String, dynamic>> register(
    String nome,
    String matricula,
    String senha,
    String perfil,
  ) async {
    http.Response response = await client.post(
      Uri.parse("${url}users"),
      body: {
        'nome': nome,
        'matricula': matricula,
        'senha': senha,
        'perfil': perfil,
        'verificado': 'false',
      },
    );

    if (response.statusCode != 201) {
      return json.decode(response.body);
    } else {
      saveInfosFromResponse(response.body);
      return json.decode(response.body);
    }
  }

  Future saveInfosFromResponse(String body) async {
    SharedPreferences sharedPreferences = await SharedPreferences.getInstance();
    Map<String, dynamic> map = json.decode(body);

    sharedPreferences.setString("nome", map['usuario']["nome"]);
    sharedPreferences.setString("matricula", map['usuario']["matricula"]);
    sharedPreferences.setString("perfil", map['usuario']["perfil"]);
    sharedPreferences.setBool("verificado", map['usuario']["verificado"]);
  }
}
