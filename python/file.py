
from pydantic import BaseModel
from typing import List
import pandas as pd

class Campo(BaseModel):
    nome: str
    tipo: str
    nulo: bool

def dataframeCampos(campos: List[Campo]):
    df_data = []
    for campo in campos:
        df_data.append({
            "nome": campo.nome,
            "tipo": campo.tipo,
            "nulo": campo.nulo
        })
    return pd.DataFrame(df_data)