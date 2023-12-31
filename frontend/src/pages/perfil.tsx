import * as React from 'react';
import { FundoBackground } from "../components/background/fundoPrincipal";
import { Box, Grid, Typography } from "@mui/material";
import useUsuario from "../logic/core/functions/user";
import svg from '../assets/drawkit/perfil/perfil1.svg'
import { BoxSpanGray } from "../components/muiComponents/boxes";
import CardDataInfo from "../components/dashboard/CardData";
import GridContainers from "../components/muiComponents/gridContainers";
import TemplateContainer from "../components/templates/container";
import FileContainer from "../components/files/container";
import { GetTemplateProps } from "../logic/interfaces/template";
import api from "../logic/api/api";
import { FileProps } from "../logic/interfaces/file";
import BoxLoading from "../components/muiComponents/boxLoading";
import { UserPerfilProps } from "../logic/interfaces/user";
import { AlertSweet } from "../components/alerts/sweetAlerts";
import { useScreenSize } from '../components/muiComponents/breakpoints';


const MeuPerfil = () => {
    const { getUser } = useUsuario();
    const { showTablet } = useScreenSize();
    const perfil = getUser().result;
    const [formatos, setFormatos] = React.useState([]);
    const [templates, setTemplates] = React.useState<GetTemplateProps[]>([]);
    const [arquivos, setArquivos] = React.useState<FileProps[]>([]);
    const [messageTemplate, setMessageTemplate] = React.useState("");
    const [messageArquivo, setMessageArquivo] = React.useState("");
    const [loading, setLoading] = React.useState(true);
    const [loadingPerfil, setLoadingPerfil] = React.useState(false);
    const [user, setUser] = React.useState<UserPerfilProps>();
    const [loadingFile, setLoadingFile] = React.useState(true);

    React.useEffect(() => {

        // get formatos
        api.get('/formato').then(res => {
            if (res.data.status === 'success') setFormatos(res.data.formatos)
        }).catch((error) => AlertSweet(error.response.data.message, 'error', false));

        // get user infos
        api.get(`/users/${perfil.matricula}`).then(res => {
            if (res.data.status === 'success') setUser(res.data.usuario)
        }).catch((error) => AlertSweet(error.response.data.message, 'error', false)
        ).finally(() => setLoadingPerfil(true));


        // get templates
        api.get(`/users/template/${perfil.matricula}`).then(res => {
            if (res.data.status === 'success') {
                if (res.data.templates.length === 0) setMessageTemplate("Não existem templates cadastrados pelo usuário")
                else setTemplates(res.data.templates)
            }
        }).catch((error) => setMessageTemplate(error.response.data.message)
        ).finally(() => setLoading(false))


        // get arquivos
        api.get(`/users/arquivo/${perfil.matricula}`).then(res => {
            if (res.data.status === 'success') {
                if (res.data.arquivos.length === undefined) setMessageArquivo("Não existem arquivos cadastrados pelo usuário")
                else setArquivos(res.data.arquivos)
            }
        }).catch((error) => {
            setMessageArquivo(error.response.data.message)
        }).finally(() => {
            setLoadingFile(false)
        })
    }, [perfil.matricula]);


    return (
        <FundoBackground container display='flex'>
            <GridContainers sx={{ px: showTablet ? 3 : 10, pt: 10, pb: 4 }} align="center" direction="row" justify="space-between">

                <Box mb={1}>
                    <Typography variant="h5" color="initial">Seu perfil, {perfil.nome}</Typography>
                    <Typography variant="body1" color="initial">
                        <BoxSpanGray>Matrícula: </BoxSpanGray> {perfil.matricula} <br />
                        <BoxSpanGray>Perfil: </BoxSpanGray> {perfil.perfil}
                    </Typography>
                </Box>

                <Box display='flex' gap={3}>
                    {!showTablet && (
                        <img src={svg} alt="Calculadora" width='100px' />
                    )}

                    {(loadingPerfil && user !== undefined) ? (
                        <>
                            {(perfil.perfil === 'Gerente' || perfil.perfil === 'Gestor') && (
                                <CardDataInfo type="template" value={user?.template.ativo} subValue={user?.template.ativo + user?.template.desativado} />
                            )}

                            {(perfil.perfil === 'Time' || perfil.perfil === 'Gestor') && (
                                <CardDataInfo type="arquivo" value={user?.arquivo.aprovados} />
                            )}
                        </>
                    ) : (
                        <Box minWidth='90vw' justifyContent='center'>
                            <BoxLoading loading message="" />
                        </Box>
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
                    <GridContainers align="start" direction="row" justify="space-between">
                        <Grid mt={2} item xl={4} lg={4} md={4} sm={12} xs={12}>
                            <Box mr={!showTablet ? 2 : 0}>
                                {loadingFile ? (
                                    <BoxLoading loading message={messageArquivo === undefined ? "Carregando..." : messageArquivo} />
                                ) : (
                                    <FileContainer message={messageArquivo} itemsPerPage={7} arquivos={arquivos} />
                                )}
                            </Box>
                        </Grid>
                        <Grid mt={4} item xl={8} lg={8} md={8} sm={12} xs={12}>
                            <TemplateContainer itemsPerPage={4} onlyActive={false} formatos={formatos} templates={templates} message={messageTemplate} loading={loading} />
                        </Grid>
                    </GridContainers>
                )}

            </GridContainers>
        </FundoBackground>
    );
}

export default MeuPerfil;