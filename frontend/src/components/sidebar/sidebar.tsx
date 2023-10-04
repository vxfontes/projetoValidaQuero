import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import { Box, Divider, List, IconButton, Toolbar } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { AiOutlineMenu, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { ChildrenProps } from '../../logic/interfaces/children';
import logo from '../../assets/validaQuero.png';
import MenuUser from './menuUser';
import { MainSide, MainSideAdm, MainSideNewUser } from '../../data/sidebar';
import useUsuario from '../../logic/core/functions/user';
import { MenuList, MenuTemplate } from './menuList';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

interface SideProps extends ChildrenProps {
    show: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const CustomDrawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': {
                ...openedMixin(theme),
                background: theme.palette.primary.main,
            },
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': {
                ...closedMixin(theme),
                background: theme.palette.primary.main,
            },
        }),
    }),
);


const SideBar = ({ children, show }: SideProps) => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [selectedItem, setSelectedItem] = React.useState<string | null>(null);
    const { getUser } = useUsuario();

    const handleListItemClick = (value: string) => {
        setSelectedItem(value);
    };

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            {show && (
                <>
                    <AppBar position="fixed" variant='outlined' sx={{ border: 'none' }} color='transparent' open={open}>
                        <Toolbar sx={{ justifyContent: open ? 'end' : 'space-between' }}>
                            <IconButton
                                color="inherit"
                                onClick={handleDrawerOpen}
                                edge="start"
                                sx={{
                                    marginRight: 5,
                                    ...(open && { display: 'none' }),
                                }}
                            >
                                <AiOutlineMenu color='#fff' />
                            </IconButton>
                            <MenuUser />
                        </Toolbar>
                    </AppBar>
                    <CustomDrawer variant="permanent" open={open}>
                        <DrawerHeader>
                            <IconButton onClick={handleDrawerClose} sx={{
                                ...(!open && { display: 'none' }),
                            }}>
                                {theme.direction === 'ltr' ?
                                    <>
                                        <img src={logo} alt="logo" width={`150px`} />
                                        <AiOutlineLeft color='#fff' />
                                    </>
                                    : <AiOutlineRight color='#fff' />
                                }
                            </IconButton>
                        </DrawerHeader>

                        <Divider />

                        {getUser().result.verificado && (
                            <MenuTemplate open={open} />
                        )}

                        <List>
                            <MenuList open={open} selectedItem={selectedItem} handleListItemClick={handleListItemClick} data={MainSide} />
                            {(getUser().result.perfil === 'Gestor' && getUser().result.verificado) && (
                                <MenuList open={open} selectedItem={selectedItem} handleListItemClick={handleListItemClick} data={MainSideAdm} />
                            )}
                            {!getUser().result.verificado && (
                                <MenuList open={open} selectedItem={selectedItem} handleListItemClick={handleListItemClick} data={MainSideNewUser} />
                            )}
                        </List>

                    </CustomDrawer>
                </>
            )}
            <Box component="main" sx={{ flexGrow: 1 }}>
                {children}
            </Box>
        </Box>
    );
};

export default SideBar;
