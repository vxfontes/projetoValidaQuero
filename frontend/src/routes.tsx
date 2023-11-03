import * as React from 'react';
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Login from "./pages/login";
import Cadastro from "./pages/cadastro";
import Inicio from "./pages/inicio";
import SideBar from "./components/sidebar/sidebar";
import ViewTemplate from "./components/templates/view";
import MeuPerfil from "./pages/perfil";
import useUsuario from "./logic/core/functions/user";
import { FundoBackground } from './components/background/fundoPrincipal';
import theme from './theme';
import { Box, Typography } from '@mui/material';
import UsersPage from './pages/user';
import { AlertSweet } from './components/alerts/sweetAlerts';
import Dashboard from './pages/dashboard';

const Rotas = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { getUser } = useUsuario();
    const user = getUser();

    // Define um array de caminhos onde a SideBar não deve aparecer
    const sideBarPaths = ['/login', '/cadastro', '/'];
    const showSideBar = !sideBarPaths.includes(location.pathname);

    const isUserAuthenticated = () => {
        return user.status === 'success';
    };

    const isUserGestor = () => {
        return user.result.perfil === 'Gestor';
    };

    React.useEffect(() => {
        const isAuthenticated = isUserAuthenticated();
        const isGestor = isUserGestor();

        if (!isAuthenticated && !sideBarPaths.includes(location.pathname)) {
            navigate("/login");
        }

        if (!isGestor) {
            if (location.pathname === '/dashboard' || location.pathname === '/users') {
                AlertSweet("Você não está autorizado a entrar nessa rota", 'error', false)
                navigate("/home");
            }
        }
    }, [location.pathname, navigate, user]);

    return (
        <SideBar show={showSideBar}>
            <Routes location={location}>
                <Route path='/login' element={<Login />} />
                <Route path='/cadastro' element={<Cadastro />} />
                <Route path='/home' element={<Inicio />} />
                <Route path='/perfil' element={<MeuPerfil />} />

                {isUserGestor() && (
                    <>
                        <Route path='/users' element={<UsersPage />} />
                        <Route path='/dashboard' element={<Dashboard />} />
                    </>
                )}

                <Route path='/template/:id' element={<ViewTemplate />} />
                <Route path="*" element={<Pagina404 />} />
            </Routes>
        </SideBar>
    );
}

export default Rotas;


const Pagina404 = () => {
    return (
        <FundoBackground sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box>
                <Typography variant="h4" color={theme.palette.fundoPrincipal?.dark}>404 | Página não encontrada</Typography>
                <Typography variant="body1" color={theme.palette.fundoPrincipal?.dark}>A página que você está procurando não existe.</Typography>
            </Box>
        </FundoBackground>
    );
};