import { UserLoginProps, UserProps } from "../../interfaces/user";
import { useContext } from "react";
import { UserContext } from "../hooks/userContext";
import { fakeUsers } from "../../../data/fakeUsuario";

export default function useUsuario() {
    const { addUserLogged, getUserLogged, clearSessionStorage } = useContext(UserContext)

    function create(values: UserProps) {
        const usuarioTemp = {
            nome: values.nome,
            matricula: values.matricula,
            perfil: values.perfil,
            verificado: false
        }
        addUserLogged(usuarioTemp);


        // const { matricula, nome, perfil, senha } = values
        // api.post('/addUser', null, { params: { matricula, nome, senha, perfil } }).then((res: any) => {
        //     return {
        //         status: res.status,
        //         result: res.result,
        //         loading: true,
        //         values: values
        //     }
        // }).catch((error) => {
        //     return {
        //         status: error.status,
        //         result: error.result,
        //         loading: false,
        //         values: values
        //     }
        // })
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
