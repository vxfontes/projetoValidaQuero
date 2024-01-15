import { createContext, useState } from "react";
import { UserVerifyProps } from "../../interfaces/user";
import { ChildrenProps } from "../../interfaces/children";
import { tokenKey } from '../../api/token';

interface UserContextProps {
    verificado: boolean;
    usuario: UserVerifyProps;
    addUserLogged: (user: UserVerifyProps) => void;
    getUserLogged: () => { status: string; result: UserVerifyProps };
    clearSessionStorage: () => void;
}

export const UserContext = createContext<UserContextProps>({
    verificado: false,
    usuario: { perfil: '', nome: '', matricula: '', verificado: false },
    getUserLogged: () => ({ status: '', result: { perfil: '', nome: '', matricula: '', verificado: false } }),
    addUserLogged: () => { },
    clearSessionStorage: () => { },
});

export function UserProvider(props: ChildrenProps) {
    const [verificado, setverificado] = useState(false);
    const [usuario, setUsuario] = useState<UserVerifyProps>({
        matricula: '',
        verificado: false,
        nome: '',
        perfil: ''
    });

    function addUserLogged(user: UserVerifyProps) {
        sessionStorage.setItem(tokenKey, JSON.stringify(user));
        setUsuario(user);
        setverificado(true);
    }

    function getUserLogged() {
        const storedUser = sessionStorage.getItem(tokenKey);

        if (storedUser) {
            try {
                const usuarioTemp = JSON.parse(storedUser);
                return { status: 'success', result: usuarioTemp };
            } catch (error) {
                console.error('Erro ao verificar o usuario:', error);
                return { status: 'error', result: { perfil: 'Houve um erro', nome: '', matricula: '' } };
            }
        } else {
            return { status: 'error', result: { perfil: 'Usuario não encontrado no sessionStorage.', nome: '', matricula: '' } };
        }
    }

    function clearSessionStorage() {
        sessionStorage.clear();
        setverificado(false);
        setUsuario({ perfil: '', nome: '', matricula: '', verificado: false });
    }

    return (
        <UserContext.Provider
            value={{
                usuario,
                verificado,
                addUserLogged,
                getUserLogged,
                clearSessionStorage
            }}
        >
            {props.children}
        </UserContext.Provider>
    );
}