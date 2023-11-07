import { User } from "../../user/entities/user.entity";
import { StatusEnum } from "../entities/status.entity";

export class PendenteTemplateDto {
    formato: string;
    titulo: string;
    descricao: string;
    dataCriacao: Date;
    quantidadeCampos: number;
    campos: JSON[];
    status: StatusEnum;
    usuario: { nome: string, matricula: string };
    id: number;
}