export const transformaNulos = (campos: any) => {
    return campos.map((campo: any) => ({
        ...campo,
        nome: campo.nome.trim(),
        nulo: campo.nulo === 'sim' ? true : false,
    }));
};