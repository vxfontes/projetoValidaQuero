import { Box, Grid, Link, Typography } from "@mui/material";
import GridContainers from "../../components/muiComponents/gridContainers";
import theme from "../../theme";
import logo from '../../assets/logoQuero.png';
import img1 from '../../assets/icon/Facebook.svg';
import img2 from '../../assets/icon/Instagram.svg';
import img3 from '../../assets/icon/Twitter.svg';
import { useScreenSize } from "../../components/muiComponents/breakpoints";

const Page4 = () => {
    const { showTablet } = useScreenSize();
    return (
        <GridContainers align="center" direction="row" sx={{
            backgroundColor: theme.palette.primary.main,
            height: '60vh'
        }}>

            <GridContainers align="center" direction="row" sx={{
                width: '90%',
                ml: '5%'
            }}>
                <Grid textAlign='left' item xl={4} lg={4} md={4} sm={12} xs={12}>
                    <Typography variant="h4" color="white" fontFamily={['Rufina', 'sans-serif'].join(',')} fontWeight='bold'>Lojas QueroQuero</Typography>
                    <Typography my={1} variant="body1" color="white" align="left">Social media</Typography>
                    <Box display='flex' gap={2}>
                        <img src={img1} alt="Imagem 1" />
                        <img src={img2} alt="Imagem 2" />
                        <img src={img3} alt="Imagem 3" />
                    </Box>
                </Grid>

                {!showTablet &&
                    <Grid display='flex' justifyContent='end' item xl={8} lg={8} md={8} sm={12} xs={12}>
                        <Box>
                            <Typography variant="body1" color="white" align="left">SOBRE A LOJA</Typography>
                            <Link href="https://www.queroquero.com.br/"><Typography variant="body1" color="lightgray" align="left">Produtos</Typography></Link>
                            <Link href="https://www.queroquero.com.br/atendimento"><Typography variant="body1" color="lightgray" align="left">Equipe</Typography></Link>
                            <Link href="https://www.queroquero.com.br/cartao-queroquero?utm_source=botao_ecm"><Typography variant="body1" color="lightgray" align="left">Cartão</Typography></Link>
                        </Box>
                    </Grid>
                }
            </GridContainers>

            <Grid textAlign='center' mt={8} item xl={12} lg={12} md={12} sm={12} xs={12}>
                <img src={logo} alt="Logo" width='90%' />
            </Grid>
        </GridContainers>
    );
}

export default Page4;