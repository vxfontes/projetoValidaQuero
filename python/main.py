from utils import allowedFile, ALLOWED_EXTENSIONS, formatoFile
from fastapi import FastAPI, UploadFile, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
from pydantic import BaseModel
from typing import List
import io
from file import Campo, dataframeCampos
from valida import verificar_tipos
import ast

class GenerateFileRequest(BaseModel):
    formato: str
    campos: List[Campo]


app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



@app.post("/file/upload/")
async def upload_file(data: Request):
    form = await data.form()

    getCampos = form.get("campos")
    usuario = form.get("usuario")
    file = form.get("file")

    formato = formatoFile(file.filename)
    campos = ast.literal_eval(getCampos)
    
    if file and allowedFile(file.filename):
        arquivo = file.file.read()
        content = io.BytesIO(arquivo)

        df = ""
        if formato == 'csv':
            df = pd.read_csv(content)
        if formato == 'xlsx' or formato == 'xls':
            df = pd.read_excel(content)

        print(df)
        
        erro = verificar_tipos(df, campos)

        if erro:
            return {"status": "error", "message": erro}
        else:
            return {"usuario": usuario, "message": "passou com sucesso"}
    else:
        return {"status": "error", "message": "Arquivo não enviado ou formato não permitido"}



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
