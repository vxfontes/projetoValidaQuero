import { Chip, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, IconButton, TablePagination } from "@mui/material";
import { UserPerfilProps } from "../../logic/interfaces/user";
import { BiSolidDislike, BiSolidLike, BiTrash } from 'react-icons/bi';
import theme from "../../theme";
import api from "../../logic/api/api";
import Swal from "sweetalert2";
import * as React from 'react';

const TableUsers = ({ users }: { users: UserPerfilProps[] }) => {

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleDeleteUser = (user: UserPerfilProps) => {
        Swal.fire({
            icon: 'question',
            title: 'Tem certeza que deseja deletar esse usuário?',
            showCancelButton: true,
            confirmButtonColor: theme.palette.primary.main,
            cancelButtonColor: theme.palette.secondary.main,
            confirmButtonText: 'Confirmar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                api.delete(`/users/${user.matricula}`).then(res => {
                    Swal.fire({
                        icon: res.data.status,
                        iconColor: theme.palette.primary.main,
                        title: res.data.message,
                        confirmButtonColor: theme.palette.primary.main,
                        confirmButtonText: 'Continue',
                    }).then((result) => {
                        if (result.isConfirmed) {
                            window.location.href = '/users';
                        }
                    });
                }).catch((error) => {
                    console.log(error);

                    Swal.fire({
                        icon: 'error',
                        title: 'Houve um erro',
                        confirmButtonColor: theme.palette.primary.main,
                        confirmButtonText: 'Continue',
                        text: error.response.data.message
                    });
                });
            }
        });
    };


    const handleChangePage = (_event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, users.length - page * rowsPerPage);


    return (
        <Container maxWidth="lg">
            <Typography variant="h5" color="initial">Lista de usuários cadastrados</Typography>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nome completo</TableCell>
                            <TableCell align="center">Matrícula</TableCell>
                            <TableCell align="center">Templates cadastrados</TableCell>
                            <TableCell align="center">Arquivos submetidos</TableCell>
                            <TableCell align="right">Perfil</TableCell>
                            <TableCell align="right">Verificado</TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>


                    <TableBody>
                        {(rowsPerPage > 0
                            ? users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : users
                        ).map((user) => (
                            <TableRow
                                key={user.matricula}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{user.nome}</TableCell>
                                <TableCell align="center">{user.matricula}</TableCell>
                                <TableCell align="center">{user.template.ativo}/{user.template.ativo + user.template.desativado} ativos</TableCell>
                                <TableCell align="center">{user.arquivo.aprovados} arquivos</TableCell>
                                <TableCell align="right">
                                    <Chip sx={{ color: theme.palette.azulClaro?.dark, backgroundColor: theme.palette.azulClaro?.light }} label={user.perfil} />
                                </TableCell>
                                <TableCell align="right">
                                    {user.verificado ? (
                                        <Chip icon={<BiSolidLike size={20} />} color="primary" label='Sim' />
                                    ) : (
                                        <Chip icon={<BiSolidDislike size={20} />} color="secondary" label='Não' />
                                    )}
                                </TableCell>
                                <TableCell align="center">
                                    <IconButton disabled={user.verificado} onClick={() => handleDeleteUser(user)}>
                                        <BiTrash color={user.verificado ? '#838282' : '#000'} />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}

                        {emptyRows > 0 && (
                            <TableRow style={{ height: 53 * emptyRows }}>
                                <TableCell colSpan={7} />
                            </TableRow>
                        )}
                    </TableBody>

                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={users.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Container>
    );
}

export default TableUsers;