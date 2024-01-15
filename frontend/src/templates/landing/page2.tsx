import GridContainers from "../../components/muiComponents/gridContainers";
import image from '../../assets/drawkit/landing/page2.svg';
import theme from "../../theme";
import { useScreenSize } from "../../components/muiComponents/breakpoints";
import { Grid, Typography } from "@mui/material";

const Page2 = () => {
    const { showTablet } = useScreenSize()
    return (
        <GridContainers align="center" direction="row" sx={{
            height: '80vh',
            display: 'flex',
            justifyContent: 'center'
        }}>

            <GridContainers align="center" direction="row" sx={{
                backgroundColor: theme.palette.fundoPrincipal?.main,
                width: '70%',
                borderRadius: '4px',
                padding: 4,
            }}>
                {!showTablet && (
                    <Grid item xl={5} lg={5} md={5} sm={12} xs={12}>
                        <img src={image} alt="Imagem" width={'86%'} />
                    </Grid>
                )}

                <Grid item xl={7} lg={7} md={7} sm={12} xs={12}>
                    <Typography variant="h4" fontWeight={500} color={theme.palette.primary.main}>Nossos objetivos</Typography>
                    <Typography variant="body1" color={theme.palette.primary.main}>Nossa plataforma foi desenvolvida para simplificar e padronizar o fluxo de dados em sua empresa. Com frequência, equipes de diferentes squads precisam enviar arquivos, mas a falta de padronização e validação pode resultar em erros e retrabalho. É aí que entramos!</Typography>
                    <Typography variant="body1" color={theme.palette.primary.main}>Com nossa solução, você poderá criar templates específicos para cada tipo de arquivo, garantindo que os campos e formatos esperados sejam seguidos. Isso significa menos erros e mais eficiência em seus processos.</Typography>
                </Grid>
            </GridContainers>

        </GridContainers>
    );
}

export default Page2;