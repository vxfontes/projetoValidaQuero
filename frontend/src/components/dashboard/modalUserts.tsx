import { Dialog, Grid, IconButton, Pagination, Typography, styled } from "@mui/material";
import { UserVerifyProps } from "../../logic/interfaces/user";
import { Transition } from "../muiComponents/dialog";
import * as React from 'react';
import GridContainers from "../muiComponents/gridContainers";
import { BsCheckLg, BsX } from 'react-icons/bs';
import theme from "../../theme";
import { BoxSpanGray } from "../muiComponents/boxes";
import api from "../../logic/api/api";
import { AlertSweet } from "../alerts/sweetAlerts";
import { useScreenSize } from "../muiComponents/breakpoints";


const UserComponent = styled(Grid)({
    background: '#fff',
    borderRadius: '10px',
    boxShadow: '1px 1px 10px 0px rgba(0, 0, 0, 0.13)',
    transition: 'background-color 0.3s, transform 0.3s',

    '&:hover': {
        backgroundColor: '#eeeeee',
        transform: 'scale(1.01)',
    },
})

interface Props {
    open: boolean;
    handleClose: () => void;
    users: UserVerifyProps[];
}

const ModalUsers = ({ open, handleClose, users }: Props) => {
    const [getUser, setUser] = React.useState<UserVerifyProps[]>(users);
    const { showTablet } = useScreenSize();
    const getitemsPerPage = showTablet ? 4 : 6;
    const [currentPage, setCurrentPage] = React.useState(1);
    const startIndex = (currentPage - 1) * getitemsPerPage;
    const endIndex = startIndex + getitemsPerPage;
    const usersToDisplay = getUser.slice(startIndex, endIndex);

    React.useEffect(() => {
        setUser(users);
    }, [users]);

    const handleDeletar = (matricula: string) => {
        api.delete(`/users/${matricula}`).then(res => {
            setUser(users.filter(user => user.matricula !== matricula));
            handleClose();
            AlertSweet(res.data.message, 'success', false)
        }).catch((error) => {
            handleClose();
            console.log(error);
            AlertSweet('Houve um erro', 'error', false, error.response.data.message)
        });
    }

    const handleAprovar = (matricula: string) => {
        api.get(`/users/verify/${matricula}`).then(res => {
            setUser(users.filter(user => user.matricula !== matricula));
            handleClose();
            AlertSweet(res.data.message, 'error', false)
        }).catch((error) => {
            handleClose();
            console.log(error);
            AlertSweet('Houve um erro', 'error', false, error.response.data.message)
        });
    }

    return (
        <Dialog TransitionComponent={Transition} keepMounted open={open} onClose={handleClose} maxWidth={'md'}>
            <GridContainers sx={{ width: '100%', p: 2, px: 3, backgroundColor: theme.palette.fundoPrincipal?.main }} align="center" direction="row">
                <Typography variant="h5" pb={1} fontWeight='bold' color="initial">Usuários pendentes</Typography>

                <GridContainers align='center' direction='row' justify="space-around">
                    {usersToDisplay.map(user => (
                        <UserComponent key={user.matricula} item my={1} xl={5} lg={5} md={5} sm={12} xs={12} px={2}>
                            <GridContainers align='center' direction='row' justify="space-evenly">
                                <Grid py={2} item xl={9} lg={9} md={9} sm={9} xs={9}>
                                    <Typography variant="h6" color="initial">{user.nome}</Typography>
                                    <Typography variant="body1" color="initial"><BoxSpanGray>Matrícula: </BoxSpanGray>{user.matricula}</Typography>
                                    <Typography variant="body1" color={theme.palette.primary.main} fontWeight='bold'>Perfil: {user.perfil}</Typography>
                                </Grid>
                                <Grid display={'flex'} justifyContent='end' item xl={3} lg={3} md={3} sm={3} xs={3}>
                                    <IconButton onClick={() => handleAprovar(user.matricula)}><BsCheckLg size={30} color={'green'} /></IconButton>
                                    <IconButton onClick={() => handleDeletar(user.matricula)}><BsX size={40} color="red" /></IconButton>
                                </Grid>
                            </GridContainers>
                        </UserComponent>
                    ))}
                </GridContainers>


                <Grid pt={1} item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <GridContainers align='center' direction='row' justify="end">
                        <Pagination
                            count={Math.ceil(users.length / getitemsPerPage)}
                            page={currentPage}
                            onChange={(_event, page) => setCurrentPage(page)}
                            color="secondary"
                            variant="text"
                            shape="rounded"
                        />
                    </GridContainers>
                </Grid>
            </GridContainers>
        </Dialog>
    );
}

export default ModalUsers;