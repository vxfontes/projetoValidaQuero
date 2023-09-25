CREATE SCHEMA ValidaQuero

-- perfil: gestor, time, gerente
CREATE TABLE "ValidaQuero"."usuario" (
    nome VARCHAR(255) NOT NULL,
    matricula VARCHAR(30) PRIMARY KEY,
    senha VARCHAR(255) NOT NULL,
    perfil VARCHAR(10) NOT NULL,
    verificado BOOLEAN NOT NULL
);

-- pendente, ativo, desativado
CREATE TABLE "ValidaQuero"."status" (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(15)
);

-- csv, xls, xlsx
CREATE TABLE "ValidaQuero"."formato" (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(15)
);

-- data atual do sistema -> DATETIME DEFAULT GETDATE()
-- EXEMPLO DE COMO VAI SER JSONB: [{ "nome": "campo1", "tipo": "inteiro", "nulo": true }, { "nome": "campo2", "tipo": "float", "nulo": false }] - precisa das aspas
CREATE TABLE "ValidaQuero"."template" (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(30) NOT NULL,
    descricao TEXT NOT NULL,
    dataCriacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    autor VARCHAR(30) NOT NULL,
    status INTEGER NOT NULL,
    formato INTEGER NOT NULL,
    quantidadeCampos INTEGER NOT NULL,
    campos JSONB NOT NULL,
    FOREIGN KEY (autor) REFERENCES usuario(matricula),
    FOREIGN KEY (status) REFERENCES status(id),
    FOREIGN KEY (formato) REFERENCES formato(id)
)

CREATE TABLE "ValidaQuero"."arquivo" (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(30) NOT NULL,
    dataCriacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    autor VARCHAR(30) NOT NULL,
    linhas INTEGER NOT NULL,
    template INTEGER NOT NULL,
    aprovado BOOLEAN NOT NULL,
    url VARCHAR,  -- pode ser nulo caso não esteja aprovado
    FOREIGN KEY (autor) REFERENCES usuario(matricula),
    FOREIGN KEY (template) REFERENCES template(id),
)