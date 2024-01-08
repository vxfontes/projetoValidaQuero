class UsuarioList {
  String nome;
  String matricula;
  String perfil;
  bool verificado;
  TemplateModel template;
  ArquivoModel arquivo;

  UsuarioList({
    required this.nome,
    required this.matricula,
    required this.perfil,
    required this.verificado,
    required this.template,
    required this.arquivo,
  });

  factory UsuarioList.fromJson(Map<String, dynamic> json) {
    return UsuarioList(
      nome: json['nome'],
      matricula: json['matricula'],
      perfil: json['perfil'],
      verificado: json['verificado'],
      template: TemplateModel.fromJson(json['template']),
      arquivo: ArquivoModel.fromJson(json['arquivo']),
    );
  }
}

class TemplateModel {
  int ativo;
  int desativado;

  TemplateModel({
    required this.ativo,
    required this.desativado,
  });

  factory TemplateModel.fromJson(Map<String, dynamic> json) {
    return TemplateModel(
      ativo: json['ativo'],
      desativado: json['desativado'],
    );
  }
}

class ArquivoModel {
  int aprovados;
  int naoaprovados;

  ArquivoModel({
    required this.aprovados,
    required this.naoaprovados,
  });

  factory ArquivoModel.fromJson(Map<String, dynamic> json) {
    return ArquivoModel(
      aprovados: json['aprovados'],
      naoaprovados: json['naoaprovados'],
    );
  }
}