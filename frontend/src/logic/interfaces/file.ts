import { UserMainProps } from "./user";

export interface FileProps {
    id: number;
    titulo: string;
    dataCriacao: string;
    formato: string;
    linhas: number;
    template: {
        titulo: string
    };
    aprovado: boolean;
    url: string;
    usuario: UserMainProps;
}

export interface FileAllProps {
    file: FileProps;
}