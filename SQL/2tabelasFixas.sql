insert into formato (titulo) values ('CSV'), ('XLSX'), ('XLS')
select * from formato f 

insert into status (titulo) values ('Ativo'), ('Pendente'), ('Desativado')
select * from status s 

insert into perfil (titulo) values ('Time'), ('Gerente'), ('Gestor')
select * from perfil p 

insert into aprovacaoArquivos (tipo, valor) values ('Aprovado', 0), ('Negado', 0), ('Total', 0);
select * from aprovacaoarquivos 