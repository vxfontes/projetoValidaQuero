import GridContainers from "../../components/muiComponents/gridContainers";
import img1 from '../../assets/drawkit/inicio/time1.svg'
import img2 from '../../assets/drawkit/inicio/time2.svg'
import { Grid } from "@mui/material";
import TemplateContainer from "../../components/templates/container";
import { useScreenSize } from "../../components/muiComponents/breakpoints";
import FileContainer from '../../components/files/container';
import TemplateCharts from "../../components/charts/mine/TemplateActives";


const InicioUpload = () => {
    const { showTablet } = useScreenSize()

    return (
        <GridContainers sx={{ mt: 5 }} align='center' direction='row'>

            <Grid p={5} display='block' textAlign={'center'} item xl={4} lg={4} md={4} sm={12} xs={12}>
                <img src={img1} alt="imagem 1" height='90%' />

                <FileContainer itemsPerPage={13} />
            </Grid>


            <Grid p={5} item xl={8} lg={8} md={8} sm={12} xs={12}>
                <TemplateContainer itemsPerPage={6} onlyActive />

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