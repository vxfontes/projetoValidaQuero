import * as React from 'react';
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Login from "./pages/login";
import Cadastro from "./pages/cadastro";
import Inicio from "./pages/inicio";
import SideBar from "./components/sidebar/sidebar";
import ViewTemplate from "./components/templates/view";
import MeuPerfil from "./pages/perfil";
import useUsuario from "./logic/core/functions/user";

const Rotas = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { getUser } = useUsuario();

    // Define um array de caminhos onde a SideBar n deve aparecer
    const sideBarPaths = ['/login', '/cadastro'];
    const showSideBar = !sideBarPaths.includes(location.pathname);

    const isUserAuthenticated = () => {
        if (getUser().status === 'success') return true
        else return false
    };

    React.useEffect(() => {
        const isAuthenticated = isUserAuthenticated();

        if (!isAuthenticated && !sideBarPaths.includes(location.pathname)) {
            navigate("/login");
        }
    }, [location.pathname, navigate]);

    return (
        <SideBar show={showSideBar}>
            <Routes location={location}>
                <Route path='/login' element={<Login />} />
                <Route path='/cadastro' element={<Cadastro />} />

                <Route path='/' element={<Inicio />} />
                <Route path='/perfil' element={<MeuPerfil />} />

                <Route path='/template/:id' element={<ViewTemplate />} />
            </Routes>
        </SideBar>
    )
}

export default Rotas;