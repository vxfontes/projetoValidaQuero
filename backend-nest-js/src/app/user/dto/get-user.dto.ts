import { StatusEnum } from '../../template/entities/status.entity';
import { PerfilEnum } from '../entities/perfil.entity';
import { Formato } from '../../formato/entities/formato.entity';
import { User } from '../entities/user.entity';
import { Template } from '../../template/entities/template.entity';

export const usuariosMock = {
    nome: 'Vanessa',
    matricula: '123',
    perfil: PerfilEnum.Gerente,
    verificado: false,
    template: {
        ativo: 1,
        desativado: 0
    },
    arquivo: {
        aprovados: 5,
        naoaprovados: 9
    }
}

export const userMock = {
    matricula: '123',
    nome: 'Usuário de teste',
    perfil: PerfilEnum.Gestor,
    senha: '123',
    verificado: true
} as User;

export const templatesMock = [
    {
        id: 3,
        titulo: 'Template 1',
        descricao: 'asdasdasdasd',
        dataCriacao: new Date(),
        quantidadeCampos: 2,
        campos: [{} as any],
        status: StatusEnum.Ativo,
        usuario: userMock,
        formato: { id: 2, titulo: 'XLSX' } as Formato,
        arquivos: []
    }
];

export const templatesMockReturn = [
    {
        id: 3,
        titulo: 'Template 1',
        descricao: 'asdasdasdasd',
        dataCriacao: new Date(),
        quantidadeCampos: 2,
        campos: [{} as any],
        status: StatusEnum.Ativo,
        usuario: { matricula: '123', nome: 'Usuário de teste', perfil: PerfilEnum.Gestor, verificado: true } as User,
        formato: 'XLSX',
        arquivos: []
    }
];

const template = new Template();
template.id = 3;
template.titulo = 'Template 1';
template.descricao = 'asdasdasdasd';
template.dataCriacao = new Date();
template.quantidadeCampos = 2;
template.campos = [{} as any];
template.status = StatusEnum.Ativo;
template.formato = { id: 2, titulo: 'XLSX' } as Formato;

export const arquivosMock = [
    {
        id: 4,
        titulo: 'Titulo Aleatorio',
        dataCriacao: new Date(),
        linhas: 10,
        aprovado: true,
        url: 'google.com',
        usuario: { ...userMock, perfil: PerfilEnum.Gestor, verificado: true, matricula: '123', nome: 'Usuário de teste' },
        template: template
    },
]


export const arquivosMockReturn = [
    {
        id: 4,
        titulo: 'Titulo Aleatorio',
        dataCriacao: new Date(),
        linhas: 10,
        aprovado: true,
        url: 'google.com',
        usuario: { matricula: '123', nome: 'Usuário de teste' },
        template: {
            titulo: 'Template 1',
        },
        formato: 'XLSX'
    },
]