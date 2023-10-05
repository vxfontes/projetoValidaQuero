import { UserVerifyProps } from "../../interfaces/user";
import { useContext } from "react";
import { UserContext } from "../hooks/userContext";

export default function useUsuario() {
    const { addUserLogged, getUserLogged, clearSessionStorage } = useContext(UserContext)

    async function login(values: UserVerifyProps) {
        addUserLogged(values)
    }

    function getUser() {
        const user = getUserLogged();
        return user
    }

    function logout() {
        clearSessionStorage()
    }

    return {
        getUser, logout, login
    }
}
