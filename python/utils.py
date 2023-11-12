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