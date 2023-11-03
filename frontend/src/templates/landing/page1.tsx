import GridContainers from "../../components/muiComponents/gridContainers";
import logo from '../../assets/validaQuero.png';
import image from '../../assets/drawkit/landing/page1.svg';
import { Box, Button, Grid, Link, Typography } from "@mui/material";
import theme from "../../theme";
import { useScreenSize } from "../../components/muiComponents/breakpoints";

const Page1 = () => {
    const { showTablet } = useScreenSize()
    return (
        <GridContainers align="center" direction="row" sx={{
            backgroundColor: 'rgba(79, 112, 156, 0.60)',
            height: '100vh'
        }}>

            {/* primeira linha */}
            <GridContainers sx={{ position: 'fixed', top: 20 }} align="start" direction="row">
                <Grid pl={3} display='flex' alignItems='center' item xl={2} lg={2} md={2} sm={6} xs={6}>
                    <img src={logo} alt="Logo" width='80%' />
                </Grid>
                <Grid pr={theme.breakpoints.down('sm') ? 5 : 2} display='flex' justifyContent='end' gap={1} item xl={10} lg={10} md={10} sm={6} xs={6}>
                    <Link href="/cadastro">
                        <Button variant="text" color="primary">Cadastrar</Button>
                    </Link>
                    <Link href="/login">
                        <Button variant="outlined" color="primary">Login</Button>
                    </Link>
                </Grid>
            </GridContainers>

            {/* segunda linha */}
            <GridContainers sx={{ mt: 5 }} align="center" direction="row">
                <Grid sx={{ display: 'flex', justifyContent: 'center' }} item xl={6} lg={6} md={6} sm={12} xs={12}>
                    <Box px={theme.breakpoints.down('sm') && 4}>
                        <Typography fontFamily={['Rufina', 'sans-serif'].join(',')} mb={2} variant="h2" color={theme.palette.primary.main}>ValidaQuero</Typography>
                        <Typography mb={2} variant="h6" fontWeight={'light'} color={theme.palette.primary.main}>
                            Simplificando e otimizando o fluxo de dados da
                            {!showTablet && <br />}
                            Quero Quero, garantindo padronização, segurança
                            {!showTablet && <br />}
                            e tomada de decisões estratégicas.
                        </Typography>
                        <Link href="/cadastro">
                            <Button variant="contained" color="primary">se cadastre</Button>
                        </Link>
                    </Box>
                </Grid>
                {!showTablet && (
                    <Grid textAlign='center' item xl={6} lg={6} md={6} sm={12} xs={12}>
                        <img src={image} alt="Logo" width='60%' />
                    </Grid>
                )}
            </GridContainers>

        </GridContainers>
    );
}

export default Page1;