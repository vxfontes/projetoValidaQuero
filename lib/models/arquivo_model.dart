class Arquivo {
  final String titulo;
  final String dataCriacao;
  final String template;
  final String formato;
  UsuarioArquivo usuario;
  final int linhas;

  Arquivo({
    required this.titulo,
    required this.dataCriacao,
    required this.template,
    required this.formato,
    required this.usuario,
    required this.linhas,
  });

  factory Arquivo.fromJson(Map<String, dynamic> json) {
    return Arquivo(
      titulo: json['titulo'],
      dataCriacao: json['dataCriacao'],
      template: json['template']['titulo'],
      formato: json['formato'],
      usuario: UsuarioArquivo.fromJson(json["usuario"]),
      linhas: json['linhas'],
    );
  }
}

class UsuarioArquivo {
  String nome;
  String matricula;

  UsuarioArquivo({
    required this.nome,
    required this.matricula,
  });

  factory UsuarioArquivo.fromJson(Map<String, dynamic> json) {
    return UsuarioArquivo(
      nome: json["nome"],
      matricula: json["matricula"],
    );
  }
}