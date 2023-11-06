import { PerfilEnum } from "../entities/perfil.entity";

export class CreateUserDto {
    nome: string;
    matricula: string;
    senha: string;
    perfil: PerfilEnum;
    verificado: boolean;
}
