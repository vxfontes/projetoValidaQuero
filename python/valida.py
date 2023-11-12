import pandas as pd
from utils import pandas_to_human

def verificar_tipos(df, campos, verify):
    campos_df = set(df.columns)
    campos_esperados = set(campo['nome'].strip() for campo in campos)
    campos_faltando = campos_df - campos_esperados

    if campos_faltando:
        return f"Campos não esperados no arquivo: {', '.join(campos_faltando)}"
    if(len(campos_df) > len(campos_esperados)):
        return f"Arquivo com campo em excesso: {', '.join(campos_faltando)}"
    if(len(campos_df) < len(campos_esperados)):
        return f"Campos não esperados no arquivo: {', '.join(campos_faltando)}"

    erros = []

    for campo in campos:
        nome_campo = campo['nome'].strip()
        nulo_esperado = campo['nulo']
        tipo_esperado = campo['tipo']

        if nome_campo not in campos_df:
            adicionar_erro(erros, f'Campo {nome_campo} não encontrado no dataframe')
            break

        nulos = df[nome_campo].isna().any()

        if not nulo_esperado and nulos:
            adicionar_erro(erros, f"Campo '{nome_campo}' não deveria possuir valores nulos, mas possui.")
            break

        if verify == 'completa':
            for valor in df[nome_campo]:
                verificar_tipo_valor(valor, tipo_esperado, nulo_esperado, nome_campo, erros)
        elif verify == 'simples':
            tipo_atual = df[nome_campo].dtype

            if tipo_esperado == 'datetime64':
                df[nome_campo] = pd.to_datetime(df[nome_campo], errors='coerce')
                if df['data'].isnull().any():
                    adicionar_erro(erros, f"Campo '{nome_campo}' possui valores que não são data")
            if tipo_esperado != 'datetime64' and tipo_esperado != tipo_atual:
                adicionar_erro(erros, f"Campo '{nome_campo}' possui valores que não são {pandas_to_human(tipo_esperado)}")

    return erros if erros else None

def is_valid_datetime(string):
    try:
        pd.to_datetime(string)
        return True
    except ValueError:
        return False

def adicionar_erro(erros, mensagem):
    if mensagem not in erros:
        erros.append(mensagem)

def verificar_tipo_valor(valor, tipo_esperado, nulo_esperado, nome_campo, erros):
    if tipo_esperado == 'datetime64' and not is_valid_datetime(valor):
        adicionar_erro(erros, f"Campo '{nome_campo}' possui valores que não são datas")
    elif tipo_esperado == 'int64' and not isinstance(valor, (int, float) if nulo_esperado else int):
        adicionar_erro(erros, f"Campo '{nome_campo}' possui valores que não são {pandas_to_human(tipo_esperado)}")
    elif tipo_esperado == 'float' and not isinstance(valor, float):
        adicionar_erro(erros, f"Campo '{nome_campo}' possui valores que não são {pandas_to_human(tipo_esperado)}")
    elif tipo_esperado == 'bool' and not isinstance(valor, bool):
        adicionar_erro(erros, f"Campo '{nome_campo}' possui valores que não são {pandas_to_human(tipo_esperado)}")
    elif tipo_esperado == 'object' and not isinstance(valor, str):
        adicionar_erro(erros, f"Campo '{nome_campo}' possuem valores que não são {pandas_to_human(tipo_esperado)}.")