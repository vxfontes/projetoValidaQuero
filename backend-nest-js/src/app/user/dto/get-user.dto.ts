import { PerfilEnum } from "../entities/perfil.entity";

export const usuariosMock = {
    "nome": "Vanessa",
    "matricula": "123",
    "perfil": PerfilEnum.Gerente,
    "verificado": false,
    "template": {
        "ativo": 1,
        "desativado": 0
    },
    "arquivo": {
        "aprovados": 5,
        "naoaprovados": 9
    }
}