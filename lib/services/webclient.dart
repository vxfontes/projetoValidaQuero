import 'package:http/http.dart' as http;
import 'package:http_interceptor/http/http.dart';
import 'http_interceptor.dart';

class WebClient {
  static const String url = "http://192.168.0.106:3000/";

  http.Client client = InterceptedClient.build(
    interceptors: [LoggingInterceptor()],
    requestTimeout: const Duration(seconds: 5),
  );
}