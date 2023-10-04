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

const MeuPerfil = () => {
    const { getUser } = useUsuario();
    const perfil = getUser().result;


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
                        <TemplateContainer itemsPerPage={6} onlyActive={false} />
                    </Grid>
                )}

                {perfil.perfil === 'Time' && (
                    <Grid mt={4} item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <FileContainer itemsPerPage={10} />
                    </Grid>
                )}

                {perfil.perfil === 'Gestor' && (
                    <GridContainers align="start" direction="row" justify="space-evenly">
                        <Grid mt={4} item xl={8} lg={8} md={8} sm={12} xs={12}>
                            <TemplateContainer itemsPerPage={6} onlyActive={false} />
                        </Grid>
                        <Grid mt={4} item xl={3} lg={3} md={3} sm={12} xs={12}>
                            <FileContainer itemsPerPage={10} />
                        </Grid>
                    </GridContainers>
                )}

            </GridContainers>
        </FundoBackground>
    );
}

export default MeuPerfil;