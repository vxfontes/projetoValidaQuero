CREATE TABLE perfil (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(15)
);

CREATE TABLE usuario (
    nome VARCHAR(255),
    matricula INTEGER PRIMARY KEY,
    senha VARCHAR(255),
    perfilID INTEGER,
    FOREIGN KEY (perfilID) REFERENCES perfil(id)
);