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
-- EXEMPLO DE COMO VAI SER JSONB: [{ "nome": "campo1", "tipo": "inteiro", "nulo": true }, { "nome": "campo2", "tipo": "float", "nulo": false }] - precisa das aspas
CREATE TABLE template (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(30) NOT NULL,
    descricao TEXT NOT NULL,
    dataCriacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    autor INTEGER NOT NULL,
    status INTEGER NOT NULL,
    formato INTEGER NOT NULL,
    quantidadeCampos INTEGER NOT NULL,
    campos JSONB NOT NULL,
    FOREIGN KEY (autor) REFERENCES usuario(matricula),
    FOREIGN KEY (status) REFERENCES status(id),
    FOREIGN KEY (formato) REFERENCES formato(id)
)

CREATE TABLE arquivo (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(30) NOT NULL,
    dataCriacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    autor INTEGER NOT NULL,
    formato INTEGER NOT NULL,
    linhas INTEGER NOT NULL,
    template INTEGER NOT NULL,
    aprovado BOOLEAN NOT NULL,
    url VARCHAR,  -- pode ser nulo caso não esteja aprovado
    FOREIGN KEY (autor) REFERENCES usuario(matricula),
    FOREIGN KEY (template) REFERENCES template(id),
    FOREIGN KEY (formato) REFERENCES formato(id)
)