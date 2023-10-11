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
                <Route path='/users' element={<UsersPage />} />

                <Route path='/template/:id' element={<ViewTemplate />} />

                <Route path="*" element={<Pagina404 />} />
            </Routes>
        </SideBar>
    )
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