from database import SessionLocal
from utils import ALLOWED_EXTENSIONS, formatoFile, load_file_data
from file import Campo, dataframeCampos, requisicao, upload_file
from fastapi import FastAPI, HTTPException, Request
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
        return requisicao(file.filename[:file.filename.rfind('.')], linhas, False, "", usuario, template)
    else:
        upload_result = upload_file(file)
        if upload_result and upload_result["status"] == "success":
            url = upload_result["message"]
            return requisicao(file.filename[:file.filename.rfind('.')], linhas, True, url, usuario, template)
        else:
            return upload_result


@app.post("/file/generate/")
async def generatefile(data: GenerateFileRequest):
    formato = data.formato
    campos = data.campos

    if formato not in ALLOWED_EXTENSIONS:
        raise HTTPException(status_code=400, detail={
            "status": "error",
            "message": "Tipo de arquivo não suportado. Use um formato autorizado.",
        })
    
    df = dataframeCampos(campos)
    print(df)
    
    # if formato == "csv":
    #     # Gere o DataFrame no formato CSV
    #     csv_data = df.to_csv(index=False)
    #     return FileResponse(io.BytesIO(csv_data), filename="template.csv")

    # elif formato == "xlsx" or formato == "xls":
    #     # Gere o DataFrame no formato XLSX ou XLS
    #     io_buffer = BytesIO()
    #     writer = pd.ExcelWriter(io_buffer, engine='openpyxl')
    #     df.to_excel(writer, index=False, sheet_name='Sheet1')
    #     writer.save()
    #     io_buffer.seek(0)
    #     extension = "xlsx" if formato == "xlsx" else "xls"
    #     return FileResponse(io_buffer, filename=f"template.{extension}")


    return {
        "status": "success",
        "message": "Download do template concluído",
        "tipagem": formato,
        # "df": df
        # "df": StreamingResponse(io.StringIO(df.to_csv(index=False)), media_type="text/csv")
    }
