import * as React from 'react';
import { Box, Chip, Divider, Link, Menu, MenuItem, Typography } from '@mui/material';
import { AiOutlineUser } from 'react-icons/ai';
import useUsuario from '../../logic/core/functions/user';

const MenuUser = () => {
    const { logout, getUser } = useUsuario();
    const usuario = getUser().result;
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        logout();
        handleClose();
    }

    return (
        <>
            {usuario.verificado ? (
                <>
                    <Chip
                        onClick={handleMenu}
                        label={
                            <Box>
                                <Typography variant="body1" color="initial">{usuario.nome}</Typography>
                                <Typography variant="caption" color="initial">{usuario.matricula}</Typography>
                            </Box>
                        }
                        sx={{
                            cursor: 'pointer',
                            py: 3,
                            borderRadius: '24px',
                            backgroundColor: '#fff',
                            color: 'white',
                            transition: 'background-color 0.3s, transform 0.3s',
                            boxShadow: '1px 2px 2px rgba(0, 0, 0, 0.25)',

                            '&:hover': {
                                cursor: 'pointer',
                                backgroundColor: '#dadada',
                                transform: 'scale(1.06)',
                            },
                        }}
                        icon={<AiOutlineUser color="black" size={30} style={{ marginLeft: 10 }} />}
                    />

                    <Menu
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <Link href='/perfil' sx={{ textDecoration: 'none' }}>
                            <MenuItem onClick={handleClose}>Meu Perfil</MenuItem>
                        </Link>
                        <Divider />
                        <Link href='/' sx={{ textDecoration: 'none' }}>
                            <MenuItem onClick={handleLogout}>Logout</MenuItem>
                        </Link>
                    </Menu>
                </>
            ) : (<></>)}
        </>
    );
}

export default MenuUser;