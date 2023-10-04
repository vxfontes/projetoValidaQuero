import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import theme from "../../theme";
import { useNavigate } from "react-router-dom";
import { HiPlusCircle } from 'react-icons/hi'

export interface MenuItem {
    nome: string;
    link: string;
    icone: JSX.Element;
}

export interface MenuListProps {
    open: boolean;
    selectedItem: string | null;
    handleListItemClick: (value: string) => void;
    data: MenuItem[];
}

export const MenuList = ({ open, selectedItem, handleListItemClick, data }: MenuListProps) => {
    const navigate = useNavigate();

    const handleItemClick = (value: string, link: string) => {
        handleListItemClick(value);
        navigate(link);
    };

    return (
        <>
            {data.map((value) => (
                <ListItem
                    key={value.nome}
                    disablePadding
                    sx={{
                        display: 'block',
                        backgroundColor: selectedItem === value.nome ? 'white' : 'transparent',
                        borderRadius: 8,
                        transition: 'background-color 0.4s ease',
                        transform: selectedItem === value.nome ? 'scale(0.95)' : 'scale(1)',
                        '&:hover': {
                            transform: 'scale(1.10)',
                            transition: 'transform 0.4s ease'
                        },
                    }}
                    onClick={() => handleItemClick(value.nome, value.link)}
                >
                    <ListItemButton
                        sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                                color: selectedItem === value.nome ? theme.palette.secondary.main : 'white',
                            }}
                        >
                            {value.icone}
                        </ListItemIcon>
                        <ListItemText
                            primary={value.nome}
                            sx={{
                                opacity: open ? 1 : 0,
                                color: selectedItem === value.nome ? theme.palette.secondary.main : 'white',
                                transition: 'font-weight 0.3s ease'
                            }}
                            primaryTypographyProps={{ fontWeight: selectedItem === value.nome ? 'bold' : 'normal' }}
                        />
                    </ListItemButton>
                </ListItem>
            ))}
        </>
    );
};


export const MenuTemplate = ({ open }: { open: boolean }) => {
    return (
        <ListItem
            key={123}
            disablePadding
            sx={{
                display: 'block',
                mt: 2,
                backgroundColor: open ? 'white' : 'transparent',
                mx: '5%',
                width: '90%',
                borderRadius: 8,
                transition: 'background-color 0.4s ease',
                transform: 'scale(1)',
                '&:hover': {
                    backgroundColor: '#ebebeb',
                    transform: 'scale(1.10)',
                    transition: 'transform 0.4s ease'
                },
            }}
        >
            <ListItemButton
                sx={{
                    minHeight: 48,
                    justifyContent: 'center',
                    px: 2.5,
                }}
            >
                <ListItemIcon
                    sx={{
                        minWidth: 0,
                        justifyContent: 'center',
                        color: theme.palette.secondary.main,
                    }}
                >
                    <HiPlusCircle size={30} />
                </ListItemIcon>
                <ListItemText
                    primary="Criar template"
                    sx={{
                        ml: open ? 2 : 0,
                        opacity: open ? 1 : 0,
                        color: 'black',
                        transition: 'font-weight 0.3s ease'
                    }}
                />
            </ListItemButton>
        </ListItem>
    );
};
