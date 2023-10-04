import { UserMainProps } from "./user";

export interface TemplateCreateProps {
    titulo: string;
    descricao: string;
    formato: number;
    quantidadeCampos: number;
    campos: CamposProps[];
}

export interface TemplateProps extends TemplateCreateProps {
    id: number;
    dataCriacao: string;
    autor: UserMainProps;
}

export interface CamposProps {
    nome: string;
    tipo: string;
    nulo: boolean;
}

export interface TemplateCreateNumberProps extends TemplateCreateProps {
    status: number
}

export interface TemplateNumberProps extends TemplateProps {
    status: number
}

export interface TemplateStatusProps extends TemplateProps {
    status: StatusProps
}

export interface StatusProps {
    titulo: string;
    color: "default" | "secondary" | "primary" | "error" | "info" | "success" | "warning";
}

export interface TemplateAllProps {
    template: TemplateNumberProps
}