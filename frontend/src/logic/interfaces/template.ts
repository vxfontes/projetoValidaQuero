import { UserMainProps } from "./user";

export interface TemplateCreateProps extends TemplateMainProps{
    quantidadeCampos: number;
    campos: CamposProps[];
}

export interface TemplateMainProps {
    titulo: string;
    formato: string;
    descricao: string;
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
    status: string
}

export interface TemplateNumberProps extends TemplateProps {
    status: string
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