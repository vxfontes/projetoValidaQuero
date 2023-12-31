import GridContainers from "../../components/muiComponents/gridContainers";
import img1 from '../../assets/drawkit/inicio/gerente1.svg'
import img2 from '../../assets/drawkit/inicio/gerente2.svg'
import { Grid } from "@mui/material";
import TemplateContainer from "../../components/templates/container";
import FileContainer from '../../components/files/container';
import { TemplateFormatoPropsContainer } from "../../logic/interfaces/template";
import * as React from 'react';
import { FileProps } from "../../logic/interfaces/file";
import api from "../../logic/api/api";
import BoxLoading from "../../components/muiComponents/boxLoading";
import TemplateFormatoCharts from "../../components/charts/mine/TemplateFormatoChart";

const InicioCadastro = ({ formatos, message, templates, loading, formatoInfo }: TemplateFormatoPropsContainer) => {

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
                <img src={img1} alt="imagem 1" width='90%' />

                {loadingFile ? (
                    <BoxLoading loading message={messageArquivo === undefined ? "Carregando..." : messageArquivo} />
                ) : (
                    <FileContainer message={messageArquivo} itemsPerPage={12} arquivos={arquivos} />
                )}
            </Grid>


            <Grid p={5} item xl={8} lg={8} md={8} sm={12} xs={12}>
                <TemplateContainer itemsPerPage={6} onlyActive={false} formatos={formatos} templates={templates} message={message} loading={loading} />

                <GridContainers align='center' direction='row'>
                    <Grid item xl={7} lg={7} md={7} sm={12} xs={12}>
                        <TemplateFormatoCharts data={formatoInfo} />
                    </Grid>

                    <Grid mt={3} display='flex' justifyContent='center' item xl={5} lg={5} md={5} sm={12} xs={12}>
                        <img src={img2} alt="imagem 2" height='100%' />
                    </Grid>
                </GridContainers>
            </Grid>

        </GridContainers>
    );
}

export default InicioCadastro;