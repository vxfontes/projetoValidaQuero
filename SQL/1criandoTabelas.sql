CREATE SCHEMA ValidaQuero;

CREATE TYPE ValidaQuero.perfil_enum AS ENUM ('Gestor', 'Gerente', 'Time');

CREATE TABLE ValidaQuero.usuario (
  "id" SERIAL PRIMARY KEY,
  "nome" VARCHAR(255) NOT NULL,
  "matricula" VARCHAR(30) NOT NULL UNIQUE,
  "senha" VARCHAR(255) NOT NULL,
  "perfil" ValidaQuero.perfil_enum NOT NULL,
  "verificado" BOOLEAN NOT NULL
);

CREATE TYPE ValidaQuero.status_enum AS ENUM ('Ativo', 'Pendente', 'Desativado');

-- csv, xls, xlsx
CREATE TABLE ValidaQuero.formato (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(15)
);

-- data atual do sistema -> DATETIME DEFAULT GETDATE()
-- EXEMPLO DE COMO VAI SER JSONB: [{ "nome": "campo1", "tipo": "inteiro", "nulo": true }, { "nome": "campo2", "tipo": "float", "nulo": false }] - precisa das aspas
CREATE TABLE ValidaQuero.template (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(30) NOT NULL,
    descricao TEXT NOT NULL,
    dataCriacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    autor VARCHAR(30) NOT NULL,
    status ValidaQuero.status_enum NOT NULL,
    formato INTEGER NOT NULL,
    quantidadeCampos INTEGER NOT NULL,
    campos JSONB NOT NULL,
    FOREIGN KEY (autor) REFERENCES ValidaQuero.usuario(id),
    FOREIGN KEY (formato) REFERENCES ValidaQuero.formato(id)
);

CREATE TABLE ValidaQuero.arquivo (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(30) NOT NULL,
    dataCriacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    autor VARCHAR(30) NOT NULL,
    linhas INTEGER NOT NULL,
    template INTEGER NOT NULL,
    aprovado BOOLEAN NOT NULL,
    url VARCHAR,  -- pode ser nulo caso não esteja aprovado
    FOREIGN KEY (autor) REFERENCES ValidaQuero.usuario(id),
    FOREIGN KEY (template) REFERENCES ValidaQuero.template(id)
);
