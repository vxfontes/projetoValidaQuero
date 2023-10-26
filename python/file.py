from database import bucket, bucket_name, SessionLocal
from sqlalchemy import text
from pydantic import BaseModel
from typing import List
import pandas as pd
import uuid
from io import BytesIO


db = SessionLocal()

class Campo(BaseModel):
    nome: str
    tipo: str
    nulo: bool

def dataframeCampos(campos: List[Campo]):
    df_data = []
    for campo in campos:
        df_data.append({
            "nome": campo.nome,
            "tipo": campo.tipo,
            "nulo": campo.nulo
        })
    return pd.DataFrame(df_data)


def upload_file(file):
    try:
        myID = uuid.uuid4()
        objeto_nome = f'arquivos/{file.filename}/{myID}'
        blob = bucket.blob(objeto_nome)
        
        file_data = BytesIO(file.file.read())

        blob.upload_from_file(file_data)

        url = f'https://storage.googleapis.com/{bucket_name}/{objeto_nome}'
        return {"status": "success", "message": url, "linhas": 0}
    except Exception as e:
        print(f"Erro durante o upload do arquivo: {str(e)}")
        return {"status": "error", "message": "Arquivo não armazenado", "linhas": 0, "erro": str(e)}


def requisicao(titulo, linhas, aprovado, url, usuario, template, erro_message=None):
    query = text('''INSERT INTO "ValidaQuero".arquivo
                (titulo, linhas, aprovado, url, usuario, "template")
                VALUES(:titulo, :linhas, :aprovado, :url, :usuario, :template)''')
    try:
        db.execute(query, {
            "titulo": titulo,
            "linhas": linhas,
            "aprovado": aprovado,
            "url": url,
            "usuario": usuario,
            "template": template
        })
        db.commit()

        if aprovado:
            return {"status": "success", "message": "Arquivo aceito com sucesso", "linhas": linhas}
        else:
            return {"status": "error", "message": erro_message, "linhas": 0}
    except Exception as e:
        db.rollback()
        print(e)
        return {"status": "error", "message": "Ocorreu um erro ao inserir o arquivo", "linhas": 0}
    finally:
        db.close()