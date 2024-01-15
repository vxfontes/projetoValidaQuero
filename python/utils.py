import io
import pandas as pd

def formatoFile(filename):
    return filename.rsplit('.', 1)[1].lower()

def load_file_data(file):
    arquivo = file.file.read()
    return io.BytesIO(arquivo)

tipos_campos = [
    {"pandas": "int64", "human": "inteiros"},
    {"pandas": "float", "human": "decimais"},
    {"pandas": "object", "human": "strings"},
    {"pandas": "bool", "human": "booleanos"},
    {"pandas": "datetime64", "human": "datas"}
]

def pandas_to_human(pandas_value):
    tipo_campo = next((campo for campo in tipos_campos if campo["pandas"] == pandas_value), None)
    return tipo_campo["human"] if tipo_campo else None

def converter(valor, tipo):
    """Tenta converter o valor para o tipo especificado usando o pandas"""
    try:
        pd.Series([valor]).astype(tipo)
        return True
    except:
        return False

def is_valid_datetime(string):
    try:
        pd.to_datetime(string)
        return True
    except ValueError:
        return False

def adicionar_erro(erros, mensagem):
    if mensagem not in erros:
        erros.append(mensagem)

def mensagemErro(nome_campo, tipo_esperado, erros, linha, valor):
    adicionar_erro(erros, f"\nCampo '{nome_campo}' possui valor(es) que não são {pandas_to_human(tipo_esperado)}, linha {linha}: '{valor}'")
