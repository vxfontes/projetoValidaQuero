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
  List<Arquivo> arquivos;

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
}

class Arquivo {
  int id;
  String titulo;
  String dataCriacao;
  int linhas;
  bool aprovado;
  String url;
  bool publico;

  Arquivo({
    required this.id,
    required this.titulo,
    required this.dataCriacao,
    required this.linhas,
    required this.aprovado,
    required this.url,
    required this.publico,
  });
}