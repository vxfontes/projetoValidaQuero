import 'dart:convert';
import 'package:validaquero/services/webclient.dart';
import 'package:http/http.dart' as http;

class TemplateService {
  String url = WebClient.url;
  http.Client client = WebClient().client;

  Future<Map<String, dynamic>> getAll() async {
    http.Response response = await client.get(
      Uri.parse("${url}template"),
    );

    return json.decode(response.body);
  }
}
