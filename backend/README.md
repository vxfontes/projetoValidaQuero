<div align="center" id="top"> 
  <img src="https://firebasestorage.googleapis.com/v0/b/vxfontes.appspot.com/o/pics%20projects%2Fvalidaquero%2FvalidaQuero.png?alt=media&token=a22a195b-e266-4eb5-b30c-5db30954c5a3" alt="Estagio" />

  &#xa0;
</div>

<h1 align="center">
	Projeto ValidaQuero
</h1>

<p align="center">
  <img alt="rotas" src="https://img.shields.io/badge/inicializar_projeto-finalizado-green"><br>
  <img alt="rotas" src="https://img.shields.io/badge/criar_template-finalizada-green">
  <img alt="rotas" src="https://img.shields.io/badge/excluir_template-finalizada-green">
  <img alt="rotas" src="https://img.shields.io/badge/consultar_template-finalizada-green"><br>
  <img alt="rotas" src="https://img.shields.io/badge/criar_usuario-finalizada-green">
  <img alt="rotas" src="https://img.shields.io/badge/excluir_usuario-finalizada-green">
  <img alt="rotas" src="https://img.shields.io/badge/consultar_usuario-finalizada-green">
  <img alt="rotas" src="https://img.shields.io/badge/mudar_permissão_usuario-finalizada-green"><b>
  <img alt="rotas" src="https://img.shields.io/badge/criar_arquivo-finalizada-green">
  <img alt="rotas" src="https://img.shields.io/badge/consultar_arquivo-finalizada-green">
  <img alt="rotas" src="https://img.shields.io/badge/lista_de_arquivos-finalizada-green">
</p>

<!-- Status -->

<h4 align="center"> 
	
	Backend
	🚧 NodeJS 🚀 Em progresso  🚧
</h4> 

<hr>

<br>

## :dart: Sobre ##

- Backend completo da aplicação
- Utilização de postgres
- NoSQL do firebase para armazenamento de arquivos
- CRUD para template, arquivos, usuários entre outros
- Criptografia de senha

## 💫 Ideias ##
- Tabela de status - informa o status do template: desativado, ativado, pendente
- Tabela de formato - csv, xls, xlsx
- Tabela de aprovado - informa o status do arquivo e faz contagem(?): aprovado ou negado
- Tabela de perfil - time, gerente ou gestão

- Template: criar, listar, consultar, baixar (criar arquivo com python)
- Usuario: criar, apagar, editar, autorizar
- Arquivo: criar (validar), baixar + consultar, listar

## :rocket: Utilização ##
```
1. Para usar, primeiro criamos o schema no banco com o nome: ValidaQuero
2. Logo depois, instalamos as dependencias com: yarn install
3. Criamos então as migrations com: yarn migration:generate 
4. Rodamos as migrations com: yarn migration:run 
5. Então agora rodamos o servidor com: yarn dev
```
