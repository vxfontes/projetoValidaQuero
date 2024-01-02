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
}

class TemplateModel {
  int ativo;
  int desativado;

  TemplateModel({
    required this.ativo,
    required this.desativado,
  });
}

class ArquivoModel {
  int aprovados;
  int naoAprovados;

  ArquivoModel({
    required this.aprovados,
    required this.naoAprovados,
  });
}
