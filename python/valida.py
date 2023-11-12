import pandas as pd
from utils import pandas_to_human, converter

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
        try:
            for j in range(len(df.columns)):
                tipo_esperado = campos[j]['tipo']
                nome_campo = campos[j]['nome']
                for i in range(len(df)):
                    data = df.iloc[i, j]

                    if not converter(data, tipo_esperado):
                        adicionar_erro(erros, f"\nCampo '{nome_campo}' possui valor(es) que não são {pandas_to_human(tipo_esperado)}, linha {i+1}: '{data}'")
        except Exception as error:
            adicionar_erro(erros, f"Erro ao verificar dados: " + error.args[0])

    elif verify == 'simples':
        for campo in campos:
            nome_campo = campo['nome'].strip()
            tipo_esperado = campo['tipo']
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