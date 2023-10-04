import { formatoArray } from "../../data/formato";

export const getFormatoTemplate = (formato: number) => {
    const formatoEncontrado = formatoArray.find((item) => item.id === formato);

    if (formatoEncontrado) {
        return formatoEncontrado.titulo;
    } else {
        return "Formato não encontrado";
    }
}