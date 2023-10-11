import GridContainers from "../../components/muiComponents/gridContainers";
import img1 from '../../assets/drawkit/inicio/time1.svg'
import img2 from '../../assets/drawkit/inicio/time2.svg'
import { Grid } from "@mui/material";
import TemplateContainer from "../../components/templates/container";
import * as React from 'react';
import FileContainer from '../../components/files/container';
import TemplateCharts from "../../components/charts/mine/TemplateActives";
import { TemplateContainerProps } from "../../logic/interfaces/template";
import { FileProps } from "../../logic/interfaces/file";
import api from "../../logic/api/api";
import BoxLoading from "../../components/muiComponents/boxLoading";


const InicioUpload = ({formatos, message, templates, loading}: TemplateContainerProps) => {
    const [arquivos, setArquivos] = React.useState<FileProps[]>([]);
    const [messageArquivo, setMessageArquivo] = React.useState("");
    const [loadingFile, setLoadingFile] = React.useState(true);

    React.useEffect(() => {
        // get arquivos
        api.get(`/arquivo`).then(res => {
            if (res.data.status === 'success') {
                if (res.data.arquivos.lenght === 0) setMessageArquivo("Não existem arquivos cadastrados pelo usuário")
                else setArquivos(res.data.arquivos)
            }
        }).catch((error) => {
            setMessageArquivo(error.response.data.message)
        }).finally(() => {
            setLoadingFile(false)
        })
    }, [])

    return (
        <GridContainers sx={{ mt: 5 }} align='center' direction='row'>

            <Grid p={5} display='block' textAlign={'center'} item xl={4} lg={4} md={4} sm={12} xs={12}>
                <img src={img1} alt="imagem 1" height='90%' />

                {loadingFile ? (
                    <BoxLoading loading message={messageArquivo === undefined ? "Carregando..." : messageArquivo} />
                ) : (
                    <FileContainer message={messageArquivo} itemsPerPage={13} arquivos={arquivos} />
                )}
            </Grid>


            <Grid p={5} item xl={8} lg={8} md={8} sm={12} xs={12}>
                <TemplateContainer itemsPerPage={6} onlyActive formatos={formatos} templates={templates} message={message} loading={loading} />

                <GridContainers align='center' direction='row'>
                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                        <TemplateCharts />
                    </Grid>
                    <Grid mt={3} display='flex' justifyContent='center' item xl={6} lg={6} md={6} sm={12} xs={12}>
                        <img src={img2} alt="imagem 2" height='100%' />
                    </Grid>
                </GridContainers>
            </Grid>

        </GridContainers>
    );
}

export default InicioUpload;