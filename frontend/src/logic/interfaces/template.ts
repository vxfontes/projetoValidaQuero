import { FileProps } from "./file";
import { FormatoProps } from "./formato";
import { UserMainProps } from "./user";

export interface TemplateCreateProps extends TemplateMainProps {
    quantidadeCampos: number;
    campos: CamposProps[];
}

export interface TemplateMainProps {
    titulo: string;
    formato: number;
    descricao: string;
}

export interface GetTemplatePuroProps {
    id: number;
    titulo: string;
    descricao: string;
    dataCriacao: string;
    quantidadeCampos: number;
    campos: CamposProps[];
    usuario: UserMainProps;
    formato: string;
    status: string;
}

export interface GetTemplateProps extends GetTemplatePuroProps {
    arquivos: FileProps[]
}
export interface TemplateProps extends TemplateCreateProps {
    id: number;
    dataCriacao: string;
    usuario: UserMainProps;
}

export interface CamposProps {
    nome: string;
    tipo: string;
    nulo: boolean;
}

export interface CamposFirstProps {
    nome: string;
    tipo: string;
    nulo: string;
}

export interface TemplateCreateNumberProps extends TemplateCreateProps {
    status: string;
    usuario: string;
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
    template: GetTemplateProps
}

export interface TemplatesAllProps {
    templates: GetTemplateProps[]
}

export interface TemplateContainerProps {
    formatos: FormatoProps[];
    templates: GetTemplateProps[];
    loading?: boolean;
    message?: string
}