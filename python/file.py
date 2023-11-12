from database import bucket, bucket_name, SessionLocal
from sqlalchemy import text
from datetime import datetime

db = SessionLocal()

def upload_file(file, formato, usuario, template):
    try:
        myDate = datetime.timestamp(datetime.now())
        objeto_nome = f'arquivos/user-{usuario}/{template}/{myDate}.{formato}'
        blob = bucket.blob(objeto_nome)

        file.file.seek(0)
        blob.upload_from_file(file.file)

        url = f'https://storage.googleapis.com/{bucket_name}/{objeto_nome}'
        return {"status": "success", "message": url, "linhas": 0}
    except Exception as e:
        print(f"Erro durante o upload do arquivo: {str(e)}")
        return {"status": "error", "message": "Arquivo não armazenado", "linhas": 0, "erro": str(e)}

def requisicao(titulo, linhas, aprovado, url, usuario, template, erro_message="Arquivo aceito com sucesso"):
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

        return {"status": "success" if aprovado else "error", "message": erro_message, "linhas": linhas if aprovado else 0}
    except Exception as e:
        db.rollback()
        print(e)
        return {"status": "error", "message": "Ocorreu um erro ao inserir o arquivo", "linhas": 0}
    finally:
        db.close()