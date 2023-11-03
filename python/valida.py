import pandas as pd

def verificar_tipos(df, campos):
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

        # negando o nulo para brincar com a tabela verdade
        if not nulo_esperado and nulos:
            adicionar_erro(erros, f"Campo '{nome_campo}' não deveria possuir valores nulos, mas possui.")
            break

        # inicio da verificação de tipagem de cada coluna
        for valor in df[nome_campo]:
            verificar_tipo_valor(valor, tipo_esperado, nulo_esperado, nome_campo, erros)

    if erros:
        return erros

    return None

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
    if tipo_esperado == 'datetime64':
        if not is_valid_datetime(valor):
            adicionar_erro(erros, f"Campo '{nome_campo}' possui valores que não são data")
    elif tipo_esperado == 'int64':
        if nulo_esperado:
            if not isinstance(valor, float):
                adicionar_erro(erros, f"Campo '{nome_campo}' possui valores que não são {tipo_esperado}")
        else:
            if not isinstance(valor, int):
                adicionar_erro(erros, f"Campo '{nome_campo}' possui valores que não são {tipo_esperado}")
    elif tipo_esperado == 'float':
        if not isinstance(valor, float):
            adicionar_erro(erros, f"Campo '{nome_campo}' possui valores que não são {tipo_esperado}")
    elif tipo_esperado == 'bool':
        if not isinstance(valor, bool):
            adicionar_erro(erros, f"Campo '{nome_campo}' possui valores que não são {tipo_esperado}")
    elif tipo_esperado == 'object':
        if not isinstance(valor, str):
            adicionar_erro(erros, f"Campo '{nome_campo}' possuem valores que não são {tipo_esperado}.")