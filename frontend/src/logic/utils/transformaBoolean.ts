export const transformaNulos = (campos: any) => {
    return campos.map((campo: any) => ({
        ...campo,
        nulo: campo.nulo === 'sim' ? true : false,
    }));
};