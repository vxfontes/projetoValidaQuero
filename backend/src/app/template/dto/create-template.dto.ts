import { StatusEnum } from "../entities/status.entity";

export class CreateTemplateDto {
    titulo: string;
    descricao: string;
    campos: any[];
    status: StatusEnum;
    formato: number;
    usuario: string;
}
