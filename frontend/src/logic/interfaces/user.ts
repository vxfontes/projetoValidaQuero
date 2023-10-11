export interface UserProtectedProps extends UserMainProps {
    perfil: string
}

export interface UserMainProps {
    nome: string
    matricula: string
}

export interface UserVerifyProps extends UserProtectedProps {
    verificado: boolean
}

export interface UserPerfilProps extends UserVerifyProps {
    template: {
        ativo: number,
        desativado: number
    },
    arquivo: {
        aprovados: number,
        naoaprovados: number
    }
}

export interface UserProps extends UserProtectedProps {
    senha: string
}

export interface UserFormProps extends UserProps {
    confirmarSenha: string
}

export interface UserLoginProps {
    matricula: string;
    senha: string;
}