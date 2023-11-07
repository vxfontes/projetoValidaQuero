import { StatusEnum } from "../entities/status.entity";

export class FindOneTemplateDto {
    id: number;
    titulo: string;
    descricao: string;
    dataCriacao: Date;
    quantidadeCampos: number;
    campos: JSON[];
    status: StatusEnum;
    usuario: { nome: string, matricula: string };
    formato: string;
    arquivos: {
        id: number,
        titulo: string,
        dataCriacao: Date,
        linhas: number,
        aprovado: boolean,
        url: string,
        usuario: { nome: string, matricula: string };
        template: { titulo: string }
    }[];
}