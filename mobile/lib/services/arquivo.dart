import 'dart:convert';
import 'package:validaquero/services/webclient.dart';
import 'package:http/http.dart' as http;

class ArquivoService {
  String url = WebClient.url;
  http.Client client = WebClient().client;

  Future<Map<String, dynamic>> getAll() async {
    http.Response response = await client.get(
      Uri.parse("${url}arquivo"),
    );

    return json.decode(response.body);
  }
}
