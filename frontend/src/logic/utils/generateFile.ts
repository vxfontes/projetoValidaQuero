import * as XLSX from 'xlsx';
import { CamposProps } from '../interfaces/template';

export const exportFile = (titulo: string, campos: CamposProps[], formato: string) => {
    if(formato.toLowerCase() === 'csv') handleExportCSV(titulo, campos)
    else if(formato.toLowerCase() === 'xlsx' || formato.toLowerCase() === 'xls') handleExportXLSX(titulo, campos, formato)
}

const handleExportCSV = (titulo: string, campos: CamposProps[]) => {
    const nomes = campos.map(campo => campo.nome).join(',');
    const csvContent = `${nomes}`;
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `${titulo}.csv`;
    a.click();

    URL.revokeObjectURL(url);
};

const handleExportXLSX = (titulo: string, campos: CamposProps[], formato: string) => {
    const nomes = campos.map(campo => campo.nome);
    const data = [nomes];

    const ws = XLSX.utils.aoa_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, titulo);
    XLSX.writeFile(wb, `${titulo}.${formato}`);
};