import { GetTemplatePuroProps } from "../../logic/interfaces/template";
import { TableCell, TableRow, Typography, IconButton, Chip, Button, Dialog, Divider, Grid, Box } from "@mui/material";
import { BiPlus } from 'react-icons/bi';
import { AiOutlineClose, AiOutlineUser } from 'react-icons/ai';
import * as React from 'react';
import { formatarData } from "../../logic/utils/data";
import GridContainers from "../muiComponents/gridContainers";
import { Transition } from "../muiComponents/dialog";
import TableCampos from "../templates/tableCampos";
import { BoxSpanGray } from "../muiComponents/boxes";
import api from "../../logic/api/api";
import Swal from "sweetalert2";
import theme from "../../theme";
import { AlertSweet } from "../alerts/sweetAlerts";

const TemplateRow = ({ template }: { template: GetTemplatePuroProps }) => {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);

    const handleDeletar = () => {
        api.delete(`/template/${template.id}`).then(res => {
            handleClose();
            Swal.fire({
                icon: res.data.status,
                iconColor: theme.palette.primary.main,
                title: res.data.message,
                confirmButtonColor: theme.palette.primary.main,
                confirmButtonText: 'Continue',
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = '/dashboard';
                }
            });
        }).catch((error) => {
            handleClose();
            console.log(error);
            AlertSweet('Houve um erro', 'error', false, error.response.data.message)
        });
    }

    const handleAprovar = () => {
        api.get(`/template/aprovar/${template.id}`).then(res => {
            handleClose();
            Swal.fire({
                icon: res.data.status,
                iconColor: theme.palette.primary.main,
                title: res.data.message,
                confirmButtonColor: theme.palette.primary.main,
                confirmButtonText: 'Continue',
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = '/dashboard';
                }
            });
        }).catch((error) => {
            handleClose();
            console.log(error);
            AlertSweet('Houve um erro', 'error', false, error.response.data.message)
        });
    }

    return (
        <>
            <TableRow
                key={template.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell padding='none' component="th" scope="row">{template.titulo}</TableCell>
                <TableCell padding='none' align="center">{template.usuario.nome}</TableCell>
                <TableCell padding='none' align="right"><Chip label={template.formato} color="secondary" /></TableCell>
                <TableCell padding='none' align="center">
                    <IconButton color='primary' onClick={() => setOpen(true)}>
                        <BiPlus />
                    </IconButton>
                </TableCell>
            </TableRow>

            <Dialog
                TransitionComponent={Transition}
                keepMounted
                open={open} onClose={handleClose}>
                <GridContainers sx={{ width: '380px', px: '5%' }} align="center" direction="row">
                    <Grid xs={12} sx={{ display: "flex", justifyContent: 'space-between', alignItems: 'center', my: 2 }}>
                        <Box gap={1} display='flex'>
                            <Button variant="contained" color="primary" onClick={handleAprovar}>Validar</Button>
                            <Button variant="contained" color="secondary" onClick={handleDeletar}>Deletar</Button>
                        </Box>
                        <Box><IconButton onClick={handleClose}><AiOutlineClose size={25} color="black" /></IconButton></Box>
                    </Grid>
                    <Grid xs={12}>
                        <Typography variant="h6" color="initial">{template.titulo}</Typography>
                        <Typography variant="body1" color="initial">{template.descricao}</Typography>
                        <Box my={2}>
                            <Divider />
                            <TableCampos campos={template.campos} />
                            <Divider />
                        </Box>
                    </Grid>

                    <Grid xs={12}>
                        <Typography variant="caption" color="initial"><BoxSpanGray>Autor do template</BoxSpanGray></Typography>
                    </Grid>
                    <Grid xs={8} mb={1}>
                        <Typography variant="body1" color="initial" sx={{ display: 'flex', alignItems: 'center' }}>
                            <AiOutlineUser style={{ border: '1px solid #0000005a', borderRadius: '4px', marginRight: '5px' }} />
                            {template.usuario.nome}
                        </Typography>
                    </Grid>
                    <Grid xs={4} mb={1} textAlign='end'>
                        <Typography variant="caption" color="initial"><BoxSpanGray>Data: </BoxSpanGray></Typography>
                        <Typography variant="caption" color="initial">{formatarData(template.dataCriacao)}</Typography>
                    </Grid>
                </GridContainers>
            </Dialog>
        </>
    )
}

export default TemplateRow;