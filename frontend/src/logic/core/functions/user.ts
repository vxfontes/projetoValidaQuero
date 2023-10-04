import { UserLoginProps, UserVerifyProps } from "../../interfaces/user";
import { useContext } from "react";
import { UserContext } from "../hooks/userContext";
import { fakeUsers } from "../../../data/fakeUsuario";

export default function useUsuario() {
    const { addUserLogged, getUserLogged, clearSessionStorage } = useContext(UserContext)

    async function create(values: UserVerifyProps) {
        addUserLogged(values)
    }

    function getUser() {
        const user = getUserLogged();
        return user
    }

    function login(values: UserLoginProps) {
        const matchedUser = fakeUsers.find((user) => {
            return user.matricula === values.matricula.toString() && user.senha === values.senha;
        });

        if (matchedUser) {
            const usuarioTemp = {
                nome: matchedUser.nome,
                matricula: matchedUser.matricula,
                perfil: matchedUser.perfil,
                verificado: matchedUser.verificado
            }
            addUserLogged(usuarioTemp);
            return { status: 'success', result: 'Login efetuado com sucesso' };
        } else {
            return { status: 'error', result: 'Usuário não encontrado' };
        }
    }

    function logout() {
        clearSessionStorage()
    }

    return {
        create, getUser, logout, login
    }
}
