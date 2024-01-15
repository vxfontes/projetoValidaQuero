class Template {
  int id;
  String titulo;
  String descricao;
  String dataCriacao;
  int quantidadeCampos;
  List<Campo> campos;
  String status;
  Usuario usuario;
  String formato;
  List<ArquivoList> arquivos;

  Template({
    required this.id,
    required this.titulo,
    required this.descricao,
    required this.dataCriacao,
    required this.quantidadeCampos,
    required this.campos,
    required this.status,
    required this.usuario,
    required this.formato,
    required this.arquivos,
  });

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
          other is Template &&
              runtimeType == other.runtimeType &&
              id == other.id;

  factory Template.fromJson(Map<String, dynamic> json) {
    return Template(
      id: json["id"],
      titulo: json["titulo"],
      descricao: json["descricao"],
      dataCriacao: json["dataCriacao"],
      quantidadeCampos: json["quantidadeCampos"],
      campos: (json["campos"] as List<dynamic>)
          .map((campoData) => Campo.fromJson(campoData))
          .toList(),
      status: json["status"],
      usuario: Usuario.fromJson(json["usuario"]),
      formato: json["formato"],
      arquivos: (json["arquivos"] as List<dynamic>)
          .map((arquivoData) => ArquivoList.fromJson(arquivoData))
          .toList(),
    );
  }
}

class Usuario {
  String nome;
  String matricula;
  bool verificado;
  String perfil;

  Usuario({
    required this.nome,
    required this.matricula,
    required this.verificado,
    required this.perfil,
  });

  factory Usuario.fromJson(Map<String, dynamic> json) {
    return Usuario(
      nome: json["nome"],
      matricula: json["matricula"],
      verificado: json["verificado"],
      perfil: json["perfil"],
    );
  }
}

class Campo {
  String nome;
  bool nulo;
  String tipo;

  Campo({
    required this.nome,
    required this.nulo,
    required this.tipo,
  });

  factory Campo.fromJson(Map<String, dynamic> json) {
    return Campo(
      nome: json["nome"],
      nulo: json["nulo"],
      tipo: json["tipo"],
    );
  }
}

class ArquivoList {
  int id;
  String titulo;
  String dataCriacao;
  int linhas;
  bool aprovado;
  String url;
  bool publico;

  ArquivoList({
    required this.id,
    required this.titulo,
    required this.dataCriacao,
    required this.linhas,
    required this.aprovado,
    required this.url,
    required this.publico,
  });

  factory ArquivoList.fromJson(Map<String, dynamic> json) {
    return ArquivoList(
      id: json["id"],
      titulo: json["titulo"],
      dataCriacao: json["dataCriacao"],
      linhas: json["linhas"],
      aprovado: json["aprovado"],
      url: json["url"],
      publico: json["publico"],
    );
  }
}
