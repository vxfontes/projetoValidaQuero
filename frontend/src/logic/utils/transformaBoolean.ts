import { CamposFirstProps } from "../interfaces/template";

export const transformaNulos = (campos: CamposFirstProps[]) => {
    return campos.map((campo: CamposFirstProps) => ({
        ...campo,
        nome: campo.nome.trim(),
        nulo: campo.nulo === 'sim' ? true : false,
    }));
};