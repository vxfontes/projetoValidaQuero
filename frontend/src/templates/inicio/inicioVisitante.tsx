import GridContainers from "../../components/muiComponents/gridContainers";
import img1 from '../../assets/drawkit/inicio/visitante1.svg'
import img2 from '../../assets/drawkit/inicio/visitante2.svg'
import img3 from '../../assets/drawkit/inicio/visitante3.svg'
import { Box, Grid, Typography } from "@mui/material";
import TemplateContainer from "../../components/templates/container";
import theme from "../../theme";
import { useScreenSize } from "../../components/muiComponents/breakpoints";
import TemplateCharts from "../../components/charts/mine/TemplateActives";
import { TemplateContainerProps } from "../../logic/interfaces/template";
import { UserProtectedProps } from "../../logic/interfaces/user";

interface UserGetProps extends TemplateContainerProps {
    usuario: UserProtectedProps
}

const InicioVisitante = ({ usuario, formatos, message, templates, loading }: UserGetProps) => {
    const { showTablet } = useScreenSize()

    return (
        <GridContainers align='center' direction='row'>

            {!showTablet && (
                <Grid p={5} display='block' textAlign={'center'} item xl={4} lg={4} md={4} sm={12} xs={12}>
                    <img src={img1} alt="imagem 1" height='100%' />
                    <h1>grafico arqui </h1>
                    <img src={img3} alt="imagem 3" height='100%' />
                </Grid>
            )}

            <Grid p={5} item xl={8} lg={8} md={8} sm={12} xs={12}>
                <Grid sx={{
                    display: 'flex', justifyContent: 'space-around', alignItems: 'center', mb: 3,
                    [theme.breakpoints.only('xl')]: {
                        justifyContent: 'space-between',
                        px: 6
                    }
                }} item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Box>
                        <Typography variant="h4" color="initial">Olá {usuario.nome}</Typography>
                        <Typography variant="h6" fontWeight={'light'} color="initial">Seu cadastro ainda está sendo avaliado.<br />Enquanto isso, veja alguns exemplos de template.</Typography>
                    </Box>

                    <img src={img2} alt="imagem 2" height='100%' />
                </Grid>

                <TemplateContainer itemsPerPage={6} onlyActive formatos={formatos} templates={templates} message={message} loading={loading} />
            </Grid>

        </GridContainers>
    );
}

export default InicioVisitante;