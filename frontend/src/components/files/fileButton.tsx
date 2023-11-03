import { Box, Divider, Grid, Typography, styled, Button } from "@mui/material";
import { FileProps } from "../../logic/interfaces/file";
import { formatarData } from "../../logic/utils/data";
import theme from "../../theme";
import DialogSlide from "../muiComponents/dialog";
import { useState } from "react";
import { BoxSpanGray } from "../muiComponents/boxes";
import { AiOutlineDownload } from 'react-icons/ai';
import { Link } from "react-router-dom";

const Container = styled(Grid)({
    background: '#FFFFFF',
})

const FileButton = ({ file, formato }: { file: FileProps, formato: string }) => {

    const [open, setOpen] = useState(false);

    const handleClose = () => setOpen(false)
    const handleOpen = () => setOpen(true)

    return (
        <>
            <DialogSlide handleClose={handleClose} open={open}>
                <Container container display='block' justifyContent={'center'} textAlign={'center'} spacing={3} px={6} py={3}>
                    <Typography variant="h5" color={file.url === null ? "error" : "initial"} mt={2}>{file.titulo}</Typography>

                    <Box pt={3}>
                        <Typography variant="body1" align="left" color={file.url === null ? "error" : "initial"}>
                            <BoxSpanGray>Template: </BoxSpanGray>{file.template.titulo}<br />
                            <BoxSpanGray>Formato: </BoxSpanGray>{formato}<br />
                            <BoxSpanGray>Data de criação: </BoxSpanGray>{formatarData(file.dataCriacao)}<br />
                            <BoxSpanGray>Autor: </BoxSpanGray>{file.usuario.nome} (matrícula: <BoxSpanGray>{file.usuario.matricula}</BoxSpanGray>) <br />
                            <BoxSpanGray>Quantidade de linhas: </BoxSpanGray>{file.url === null ? "Arquivo não aprovado" : file.linhas}
                        </Typography>
                    </Box>

                    <br />

                    <Link target="_blank" to={file.url}>
                        <Button disabled={file.url === null ? true : false} variant="contained" color="primary" startIcon={<AiOutlineDownload />}>Download</Button>
                    </Link>
                </Container>
            </DialogSlide>

            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                px: 1,
                mx: 2,
                transition: 'transform 0.2s',
                '&:hover': {
                    cursor: 'pointer',
                    backgroundColor: theme.palette.fundoComponente?.dark,
                    transform: 'translateX(2%)',
                },
            }}
                onClick={handleOpen}
            >
                <Box>
                    <Typography align='left' variant="body1" color="initial">{file.titulo.slice(0, 15) + '...'}</Typography>
                    <Typography align='left' variant="body2" color="GrayText">{file.template.titulo}</Typography>
                </Box>
                <Typography variant="caption" color="initial">{formatarData(file.dataCriacao)}</Typography>
            </Box>
            <Divider sx={{ mx: 2 }} />
        </>
    );
}

export default FileButton;
