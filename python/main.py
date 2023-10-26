from database import SessionLocal
from utils import formatoFile, load_file_data
from file import Campo, requisicao, upload_file
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
from sqlalchemy import text
from valida import verificar_tipos
import pandas as pd
import json

class GenerateFileRequest(BaseModel):
    formato: str
    campos: List[Campo]


app = FastAPI()
db = SessionLocal()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/teste/")
async def teste():
    result = db.execute(text('''SELECT * FROM "ValidaQuero"."formato"''')).fetchall()
    # print(result[0])
    return {"Teste": "indo"}


@app.post("/file/upload/")
async def verify_file(data: Request):
    form = await data.form()

    file = form.get("file")
    titulo = form.get("titulo")
    usuario = form.get("usuario")
    template = form.get("template")
    formato_esperado = form.get("formato")
    getCampos = form.get("campos")

    formato = formatoFile(file.filename)
    
    campos = []
    try:
        campos = json.loads(getCampos)
    except json.JSONDecodeError as e:
        return {"status": "error", "message": "Erro ao analisar campos JSON: " + str(e)}

    if not file or formato_esperado != formato:
        return {"status": "error", "message": "Arquivo não enviado ou formato não permitido", "linhas": 0}

    content = load_file_data(file)
    df = pd.DataFrame()
    
    if formato == 'csv':
        df = pd.read_csv(content)
    elif formato in ['xlsx', 'xls']:
        df = pd.read_excel(content)

    linhas = df.shape[0]
    erro = verificar_tipos(df, campos)

    if erro:
        return requisicao(titulo, linhas, False, "", usuario, template, erro)
    else:
        upload_result = upload_file(file)
        if upload_result and upload_result["status"] == "success":
            url = upload_result["message"]
            return requisicao(titulo, linhas, True, url, usuario, template)
        else:
            return upload_result