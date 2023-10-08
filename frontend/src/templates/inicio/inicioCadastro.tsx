import GridContainers from "../../components/muiComponents/gridContainers";
import img1 from '../../assets/drawkit/inicio/gerente1.svg'
import img2 from '../../assets/drawkit/inicio/gerente2.svg'
import { Grid } from "@mui/material";
import TemplateContainer from "../../components/templates/container";
import FileContainer from '../../components/files/container';
import TemplateCharts from "../../components/charts/mine/TemplateActives";
import { TemplateContainerProps } from "../../logic/interfaces/template";


const InicioCadastro = ({formatos, message, templates, loading}: TemplateContainerProps) => {
    return (
        <GridContainers sx={{ mt: 5 }} align='center' direction='row'>

            <Grid p={5} display='block' textAlign={'center'} item xl={4} lg={4} md={4} sm={12} xs={12}>
                <img src={img1} alt="imagem 1" width='90%' />

                <FileContainer itemsPerPage={12} />
            </Grid>


            <Grid p={5} item xl={8} lg={8} md={8} sm={12} xs={12}>
                <TemplateContainer itemsPerPage={6} onlyActive={false} formatos={formatos} templates={templates} message={message} loading={loading} />

                <GridContainers align='center' direction='row'>
                    <Grid item xl={7} lg={7} md={7} sm={12} xs={12}>
                        <TemplateCharts />
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