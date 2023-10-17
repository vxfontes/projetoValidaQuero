def verificar_tipos(df, campos):
    campos_df = set(df.columns)
    campos_esperados = set(campo['nome'] for campo in campos)

    campos_faltando = campos_df - campos_esperados

    if campos_faltando:
        return f"Campos não esperados no arquivo: {', '.join(campos_faltando)}"

    erros = []

    for campo in campos:
        nome_campo = campo['nome']
        nulo_esperado = campo['nulo']
        tipo_esperado = campo.get('tipo', None)

        nulos = df[nome_campo].isna().any()

        if nome_campo not in campos_df:
            erros.append(f"Coluna '{nome_campo}' não encontrado no arquivo.")

        if tipo_esperado:
            tipo_real = df[nome_campo].dtype

            if tipo_real != tipo_esperado:
                erros.append(f"Coluna '{nome_campo}' possui itens do tipo incorreto")

        if nulo_esperado and not nulos:
            erros.append(f"Campo '{nome_campo}' deve permitir valores nulos, mas não permite.")

        if not nulo_esperado and nulos:
            erros.append(f"Campo '{nome_campo}' não deve permitir valores nulos, mas permite.")



    if erros:
        return erros

    return None