export function formatarData(dataComHora: string): string {

    const partesData = dataComHora.split(' ');

    const dataSemHora = partesData[0];
    const data = new Date(dataSemHora);

    if (isNaN(data.getTime())) {
        return dataComHora;
    }

    const dia = data.getDate();
    const mes = data.getMonth() + 1; // Os meses em JavaScript começam em 0
    const ano = data.getFullYear();

    const dataFormatada = `${dia.toString().padStart(2, '0')}/${mes.toString().padStart(2, '0')}/${ano}`;

    return dataFormatada;
}