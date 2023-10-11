import * as React from 'react';
import { Box, CircularProgress, Divider, IconButton, Typography } from "@mui/material";
import { FundoBackground } from "../components/background/fundoPrincipal";
import { UserPerfilProps } from '../logic/interfaces/user';
import api from '../logic/api/api';
import { TemplateContainerGrid } from '../styles/gridStyle';
import { AiFillAppstore, AiOutlineMenu } from 'react-icons/ai';
import GridContainers from '../components/muiComponents/gridContainers';
import TableUsers from '../components/users/TableUsers';


const UsersPage = () => {

    const [users, setUsers] = React.useState<UserPerfilProps[]>([]);
    const [message, setMessage] = React.useState("");
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {

        // get templates
        api.get('/users').then(res => {
            if (res.data.status === 'success') {
                if (res.data.usuarios.lenght === 0) setMessage("Não existem usuários cadastrados no sistema");
                else setUsers(res.data.usuarios);
            }
        }).catch((error) => {
            setMessage(error.response.data.message);
        }).finally(() => {
            setLoading(false);
        })
    }, []);

    return (
        <FundoBackground container display='flex'>
            <GridContainers align='center' direction='row' justify='center'>

                <TemplateContainerGrid my={4} p={2} item xl={11} lg={11} md={11} sm={11} xs={11}>
                    {loading ? (
                        <>
                            <Box pl={1} display='flex' justifyContent='space-between' alignItems='center'>
                                <Typography variant="h6" color="initial">Lista de usuários cadastrados</Typography>
                                <Box display='flex' alignItems='center'>
                                    <IconButton sx={{ color: '#000' }} disabled>
                                        <AiOutlineMenu />
                                    </IconButton>
                                    <IconButton sx={{ color: '#000' }} disabled>
                                        <AiFillAppstore />
                                    </IconButton>
                                </Box>
                            </Box>
                            <Divider sx={{ py: '1px' }} />
                            <Box display='flex' justifyContent='center' alignItems='center'>
                                <CircularProgress sx={{ mt: 4, mb: 2 }} />
                            </Box>
                        </>

                    ) : (
                        <>
                            {message === "" ? (
                                <TableUsers users={users} />
                            ) : (
                                <>
                                    <Box pl={1} display='flex' justifyContent='space-between' alignItems='center'>
                                        <Typography variant="h6" color="initial">Lista de usuários cadastrados</Typography>
                                        <Box display='flex' alignItems='center'>
                                            <IconButton sx={{ color: '#000' }} disabled>
                                                <AiOutlineMenu />
                                            </IconButton>
                                            <IconButton sx={{ color: '#000' }} disabled>
                                                <AiFillAppstore />
                                            </IconButton>
                                        </Box>
                                    </Box>
                                    <Divider sx={{ py: '1px' }} />
                                    <Typography my={2} ml={1} variant="body1" color="initial" align='center'>{message}</Typography>
                                </>
                            )}
                        </>
                    )}
                </TemplateContainerGrid>

            </GridContainers>
        </FundoBackground>
    );
}

export default UsersPage;