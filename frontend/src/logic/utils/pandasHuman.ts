export const tiposCampos = [
    { "pandas": "int64", "human": "Inteiro" },
    { "pandas": "float", "human": "Decimal" },
    { "pandas": "object", "human": "String" },
    { "pandas": "bool", "human": "Boolean" },
    { "pandas": "datetime64", "human": "Data" }
]

export function pandasToHuman(pandasValue: string): string | undefined {
    const tipoCampo = tiposCampos.find((campo) => campo.pandas === pandasValue);
    return tipoCampo ? tipoCampo.human : undefined;
}