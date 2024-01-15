import { PerfilEnum } from "../../user/entities/perfil.entity";
import { User } from "../../user/entities/user.entity";
import { StatusEnum } from "../entities/status.entity";
import { Formato } from "../../formato/entities/formato.entity";

export const templatesPuroMock = {
    "id": 1,
    "titulo": "Template 1",
    "descricao": "asdasdasdasd",
    "dataCriacao": new Date(),
    "quantidadeCampos": 2,
    "campos": [{} as any],
    "status": StatusEnum.Ativo,
    "usuario": {
        "nome": "Vanessa",
        "matricula": "312",
        "verificado": true,
        "perfil": PerfilEnum.Gerente,
        "senha": "123"
    } as User,
    "formato": { id: 1, titulo: "XLSX" } as Formato,
    "arquivos": []
};

export const templatesMock = [templatesPuroMock];

export const formattedTemplatesMock = templatesMock.map(template => ({
    ...template,
    status: template.status,
    usuario: {
        nome: template.usuario.nome,
        matricula: template.usuario.matricula,
    },
    formato: template.formato.titulo,
}));

export const formattedTemplatesPuroMock = {
    ...templatesPuroMock,
    status: templatesPuroMock.status,
    usuario: {
        nome: templatesPuroMock.usuario.nome,
        matricula: templatesPuroMock.usuario.matricula,
    },
    formato: templatesPuroMock.formato.titulo,
};

export const formattedTemplatesMockAll = templatesMock.map(template => ({
    ...template,
    status: template.status,
    usuario: {
        nome: template.usuario.nome,
        matricula: template.usuario.matricula,
        perfil: template.usuario.perfil,
        verificado: template.usuario.verificado,
    },
    formato: template.formato.titulo,
}));