import 'dart:convert';
import 'dart:io';

import 'package:validaquero/services/webclient.dart';
import 'package:http/http.dart' as http;

class UsuarioService {
  String url = WebClient.url;
  http.Client client = WebClient().client;

  Future<String> login(String matricula, String senha) async {
    http.Response response = await client.post(
      Uri.parse("${url}users/login"),
      body: {"matricula": matricula, "senha": senha},
    );

    if (response.statusCode != 200) {
      return (response.body);
    } else {
      print(response.body);
      return (response.body);
    }
  }

  Future<String> register(
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

    print(response.body);

    if (response.statusCode != 200) {
      return (response.body);
    } else {
      return (response.body);
    }
  }
//
// Future<String> saveInfosFromResponse(String body) async {
//   SharedPreferences sharedPreferences = await SharedPreferences.getInstance();
//
//   Map<String, dynamic> map = json.decode(body);
//
//   sharedPreferences.setString("accessToken", map["accessToken"]);
//   sharedPreferences.setString("id", map["user"]["id"].toString());
//   sharedPreferences.setString("email", map["user"]["email"]);
//
//   return map["accessToken"];
// }
}

class UserNotFoundException implements Exception {}
