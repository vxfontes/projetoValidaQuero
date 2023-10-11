import { FundoBackground } from "../components/background/fundoPrincipal";
import { Box, Grid, Typography } from "@mui/material";
import useUsuario from "../logic/core/functions/user";
import svg from '../assets/drawkit/perfil/perfil1.svg'
import { BoxSpanGray } from "../components/muiComponents/boxes";
import CardDataInfo from "../components/dashboard/CardData";
import GridContainers from "../components/muiComponents/gridContainers";
import TemplateContainer from "../components/templates/container";
import FileContainer from "../components/files/container";
import theme from "../theme";
import * as React from 'react';
import { GetTemplateProps } from "../logic/interfaces/template";
import api from "../logic/api/api";
import Swal from "sweetalert2";
import { FileProps } from "../logic/interfaces/file";
import BoxLoading from "../components/muiComponents/boxLoading";


const MeuPerfil = () => {
    const { getUser } = useUsuario();
    const perfil = getUser().result;
    const [formatos, setFormatos] = React.useState([]);
    const [templates, setTemplates] = React.useState<GetTemplateProps[]>([]);
    const [arquivos, setArquivos] = React.useState<FileProps[]>([]);
    const [messageTemplate, setMessageTemplate] = React.useState("");
    const [messageArquivo, setMessageArquivo] = React.useState("");
    const [loading, setLoading] = React.useState(true);
    const [loadingFile, setLoadingFile] = React.useState(true);

    React.useEffect(() => {

        // get formatos
        api.get('/formato').then(res => {
            if (res.data.status === 'success') {
                setFormatos(res.data.formatos)
            }
        }).catch((error) => {
            Swal.fire({
                icon: error.response.data.status,
                iconColor: theme.palette.secondary.main,
                title: error.response.data.message,
                confirmButtonColor: theme.palette.secondary.main,
                confirmButtonText: 'Retornar',
            })
        })


        // get templates
        api.get(`/user/templates/${perfil.matricula}`).then(res => {
            if (res.data.status === 'success') {
                if (res.data.templates.lenght === 0) setMessageTemplate("Não existem templates cadastrados pelo usuário")
                else setTemplates(res.data.templates)
            }
        }).catch((error) => {
            setMessageTemplate(error.response.data.message)
        }).finally(() => {
            setLoading(false)
        })


        // get arquivos
        api.get(`/user/arquivos/${perfil.matricula}`).then(res => {
            if (res.data.status === 'success') {
                if (res.data.arquivos.lenght === undefined) setMessageArquivo("Não existem arquivos cadastrados pelo usuário")
                else setArquivos(res.data.arquivos)
            }
        }).catch((error) => {
            setMessageArquivo(error.response.data.message)
        }).finally(() => {
            setLoadingFile(false)
        })
    }, []);


    return (
        <FundoBackground container display='flex'>
            <GridContainers sx={{ [theme.breakpoints.down('md')]: { pt: 10 }, px: 20 }} align="center" direction="row" justify="space-between">

                <Box mb={1}>
                    <Typography variant="h5" color="initial">Seu perfil, {perfil.nome}</Typography>
                    <Typography variant="body1" color="initial">
                        <BoxSpanGray>Matrícula: </BoxSpanGray> {perfil.matricula} <br />
                        <BoxSpanGray>Perfil: </BoxSpanGray> {perfil.perfil}
                    </Typography>
                </Box>

                <Box display='flex' gap={3}>
                    <img src={svg} alt="Calculadora" width='100px' />

                    {(perfil.perfil === 'Gerente' || perfil.perfil === 'Gestor') && (
                        <CardDataInfo type="template" value={34} subValue={54} />
                    )}

                    {(perfil.perfil === 'Time' || perfil.perfil === 'Gestor') && (
                        <CardDataInfo type="arquivo" value={90} />
                    )}
                </Box>

                {perfil.perfil === 'Gerente' && (
                    <Grid mt={4} item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <TemplateContainer itemsPerPage={6} onlyActive formatos={formatos} templates={templates} message={messageTemplate} loading={loading} />
                    </Grid>
                )}

                {perfil.perfil === 'Time' && (
                    <Grid mt={4} item xl={12} lg={12} md={12} sm={12} xs={12}>
                        {loadingFile ? (
                            <BoxLoading loading message={messageArquivo === undefined ? "Carregando..." : messageArquivo} />
                        ) : (
                            <FileContainer message={messageArquivo} itemsPerPage={10} arquivos={arquivos} />
                        )}
                    </Grid>
                )}

                {perfil.perfil === 'Gestor' && (
                    <GridContainers align="start" direction="row" justify="space-evenly">
                        <Grid mt={4} item xl={8} lg={8} md={8} sm={12} xs={12}>
                            <TemplateContainer itemsPerPage={6} onlyActive={false} formatos={formatos} templates={templates} message={messageTemplate} loading={loading} />
                        </Grid>
                        <Grid mt={4} item xl={3} lg={3} md={3} sm={12} xs={12}>
                            {loadingFile ? (
                                <BoxLoading loading message={messageArquivo === undefined ? "Carregando..." : messageArquivo} />
                            ) : (
                                <FileContainer message={messageArquivo} itemsPerPage={10} arquivos={arquivos} />
                            )}
                        </Grid>
                    </GridContainers>
                )}

            </GridContainers>
        </FundoBackground>
    );
}

export default MeuPerfil;