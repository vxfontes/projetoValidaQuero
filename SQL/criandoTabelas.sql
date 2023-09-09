-- gestor, time, gerente
CREATE TABLE perfil (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(15)
);

CREATE TABLE usuario (
    nome VARCHAR(255) NOT NULL,
    matricula INTEGER PRIMARY KEY,
    senha VARCHAR(255) NOT NULL,
    perfil INTEGER NOT NULL,
    FOREIGN KEY (perfil) REFERENCES perfil(id)
);

-- pendente, ativo, desativado
CREATE TABLE status (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(15)
);

-- csv, xls, xlsx
CREATE TABLE formato (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(15)
);

-- data atual do sistema -> DATETIME DEFAULT GETDATE()
-- EXEMPLO DE COMO VAI SER JSONB: [{ "nome": "campo1", "tipo": "inteiro" }, { "nome": "campo2", "tipo": "inteiro" }] - precisa das aspas
CREATE TABLE template (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(30) NOT NULL,
    descricao TEXT NOT NULL,
    dataCriacao DATETIME DEFAULT GETDATE(),
    autor INTEGER NOT NULL,
    status INTEGER NOT NULL,
    formato INTEGER NOT NULL,
    quantidadeCampos INTEGER NOT NULL,
    campos JSONB NOT NULL,
    FOREIGN KEY (autor) REFERENCES usuario(matricula),
    FOREIGN KEY (status) REFERENCES status(id),
    FOREIGN KEY (formato) REFERENCES formato(id),
)