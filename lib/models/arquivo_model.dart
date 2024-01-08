class Arquivo {
  final String titulo;
  final String dataCriacao;
  final String template;
  final String formato;
  Usuario usuario;
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
      usuario: Usuario.fromJson(json["usuario"]),
      linhas: json['linhas'],
    );
  }
}

class Usuario {
  String nome;
  String matricula;

  Usuario({
    required this.nome,
    required this.matricula,
  });

  factory Usuario.fromJson(Map<String, dynamic> json) {
    return Usuario(
      nome: json["nome"],
      matricula: json["matricula"],
    );
  }
}