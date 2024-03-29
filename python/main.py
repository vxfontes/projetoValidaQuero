from database import SessionLocal
from utils import formatoFile, load_file_data
from file import requisicao, upload_file
from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse, FileResponse
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import text
from valida import verificar_tipos
import pandas as pd
import json

app = FastAPI()
db = SessionLocal()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/file/upload")
async def verify_file(data: Request):
    form = await data.form()
    file = form.get("file")
    titulo = form.get("titulo")
    usuario = form.get("usuario")
    publico = form.get("publico")
    template = form.get("template")
    verify = form.get("verify")
    repositorio = form.get("repositorio")
    formato_esperado = form.get("formato").lower()
    campos = json.loads(form.get("campos", "[]"))

    formato = formatoFile(file.filename)
    
    if not file or formato_esperado != formato:
        return {"status": "error", "message": "Arquivo não enviado ou formato não permitido", "linhas": 0}

    content = load_file_data(file)
    df = pd.DataFrame()

    if formato == 'csv':
        df = pd.read_csv(content)
    elif formato in ['xlsx', 'xls']:
        df = pd.read_excel(content)


    linhas = df.shape[0]
    erro = verificar_tipos(df, campos, verify)

    if erro:
        return requisicao(titulo, linhas, False, "", usuario, template, publico, erro)
    else:
        upload_result = upload_file(file, formato_esperado, usuario, template, repositorio)
        if upload_result and upload_result["status"] == "success":
            url = upload_result["message"]
            return requisicao(titulo, linhas, True, url, usuario, template, publico)
        else:
            return upload_result


@app.get("/dashboard/data")
async def data():
    query_arquivos = '''
        SELECT
            SUM(CASE WHEN "aprovado" = TRUE THEN 1 ELSE 0 END) AS "Aprovados",
            SUM(CASE WHEN "aprovado" = FALSE THEN 1 ELSE 0 END) AS "Reprovados"
        FROM "ValidaQuero"."arquivo"
    '''

    query_templates = '''
        SELECT
            "status",
            COUNT(*) AS "Quantidade de Templates"
        FROM "ValidaQuero"."template"
        GROUP BY "status";
    '''

    query_templates_mes = '''
        SELECT
            CONCAT(LPAD(EXTRACT(MONTH FROM "dataCriacao")::text, 2, '0'), '/', EXTRACT(YEAR FROM "dataCriacao")) AS "month",
            SUM(CASE WHEN "status" = 'Ativo' THEN 1 ELSE 0 END) AS "ativos",
            SUM(CASE WHEN "status" = 'Desativado' THEN 1 ELSE 0 END) AS "inativos"
        FROM "ValidaQuero"."template"
        GROUP BY "month"
        ORDER BY "month";
    '''

    result_arquivos = db.execute(text(query_arquivos)).fetchone()
    result_templates = db.execute(text(query_templates)).fetchall()
    result_templates_mes = db.execute(text(query_templates_mes)).fetchall()

    dashboard_data = {"arquivo": {}}

    if result_arquivos:
        aprovados, reprovados = result_arquivos
        dashboard_data["arquivo"]["aprovado"] = aprovados
        dashboard_data["arquivo"]["recusado"] = reprovados

    arquivoData = {}
    total = 0
    for status, quantidade in result_templates:
        total = total + quantidade

    for status, quantidade in result_templates:
        arquivoData[status] = {
            "value": quantidade,
            "total": total
        }
    
    dashboard_data["arquivoData"] = arquivoData

    templates_mes = []
    for month, ativos, inativos in result_templates_mes:
        templates_mes.append({
            "month": month,
            "ativos": ativos,
            "inativos": inativos
        })

    dashboard_data["templateData"] = templates_mes

    return dashboard_data


@app.get("/dashboard/excel", response_class=FileResponse)
async def excel():
    query_arquivos = '''
        SELECT
            SUM(CASE WHEN "aprovado" = TRUE THEN 1 ELSE 0 END) AS "Aprovados",
            SUM(CASE WHEN "aprovado" = FALSE THEN 1 ELSE 0 END) AS "Reprovados"
        FROM "ValidaQuero"."arquivo"
    '''

    query_templates = '''
        SELECT
            "status",
            COUNT(*) AS "Quantidade de Templates"
        FROM "ValidaQuero"."template"
        GROUP BY "status";
    '''

    query_templates_mes = '''
        SELECT
            CONCAT(LPAD(EXTRACT(MONTH FROM "dataCriacao")::text, 2, '0'), '/', EXTRACT(YEAR FROM "dataCriacao")) AS "month",
            SUM(CASE WHEN "status" = 'Ativo' THEN 1 ELSE 0 END) AS "ativos",
            SUM(CASE WHEN "status" = 'Desativado' THEN 1 ELSE 0 END) AS "inativos"
        FROM "ValidaQuero"."template"
        GROUP BY "month"
        ORDER BY "month";
    '''

    result_arquivos = db.execute(text(query_arquivos)).fetchone()
    result_templates = db.execute(text(query_templates)).fetchall()
    result_templates_mes = db.execute(text(query_templates_mes)).fetchall()

    dashboard_data = {"arquivo": {}}

    if result_arquivos:
        aprovados, reprovados = result_arquivos
        dashboard_data["arquivo"]["aprovado"] = aprovados
        dashboard_data["arquivo"]["recusado"] = reprovados

    templateInfo = {}
    total = 0
    for status, quantidade in result_templates:
        total = total + quantidade

    for status, quantidade in result_templates:
        templateInfo[status] = {
            "quantidade": quantidade,
            "total": total
        }
    
    dashboard_data["templateInfo"] = templateInfo

    templates_mes = []
    for month, ativos, inativos in result_templates_mes:
        templates_mes.append({
            "mes": month,
            "ativos": ativos,
            "inativos": inativos
        })

    dashboard_data["templateData"] = templates_mes

    df_templates_mes = pd.DataFrame(dashboard_data["templateData"])
    df_templateInfo = pd.DataFrame(dashboard_data["templateInfo"])
    df_arquivos = pd.DataFrame(dashboard_data["arquivo"], index=[0])

    with pd.ExcelWriter('dashboard_data.xlsx') as writer:
        df_arquivos.to_excel(writer, sheet_name='Arquivos')
        df_templateInfo.to_excel(writer, sheet_name='TemplateInfo')
        df_templates_mes.to_excel(writer, sheet_name='TemplatesMes')

    return 'dashboard_data.xlsx'


@app.get("/file")
async def arquivos():
    query_arquivos = """
        SELECT
            arquivo.id,
            arquivo.titulo,
            arquivo.aprovado,
            arquivo.url,
            arquivo.linhas,
            arquivo.publico,
            arquivo."dataCriacao",
            usuario.nome AS usuario_nome,
            usuario.matricula AS usuario_matricula,
            template.titulo AS template_titulo,
            formato.titulo AS formato_titulo
        FROM "ValidaQuero".arquivo
        LEFT JOIN "ValidaQuero".usuario ON arquivo.usuario = usuario.matricula 
        LEFT JOIN "ValidaQuero".template ON arquivo.template = template.id
        LEFT JOIN "ValidaQuero".formato ON template.formato = formato.id;
    """

    result_arquivos = db.execute(text(query_arquivos)).fetchall()

    formatted_arquivos = []
    for row in result_arquivos:
        formatted_arquivo = {
            "id": row[0],
            "titulo": row[1],
            "aprovado": row[2],
            "url": row[3],
            "linhas": row[4],
            "publico": row[5],
            "dataCriacao": str(row[6]),
            "usuario": {
                "nome": row[7],
                "matricula": row[8]
            },
            "template": {
                "titulo": row[9]
            },
            "formato": row[10],
        }
        formatted_arquivos.append(formatted_arquivo)

    return JSONResponse(content=formatted_arquivos)