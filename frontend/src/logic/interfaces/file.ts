import { UserMainProps } from "./user";

export interface FileProps {
    id: number;
    titulo: string;
    dataCriacao: string;
    autor: string;
    formato: number;
    linhas: number;
    template: string;
    aprovado: boolean;
    url: string;
    usuario: UserMainProps;
}

export interface FileAllProps {
    file: FileProps;
}