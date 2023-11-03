import GridContainers from "../../components/muiComponents/gridContainers";
import Typography from '@mui/material/Typography'
import theme from "../../theme";
import { Box, Grid } from "@mui/material";
import { BoxSpanGray } from "../../components/muiComponents/boxes";

const Page3 = () => {
    return (
        <GridContainers align="center" direction="row" sx={{
            height: '80vh',
            display: 'flex',
            justifyContent: 'center'
        }}>
            <Grid textAlign='center' item xl={12} lg={12} md={12} sm={11} xs={11}>
                <Typography fontWeight={600} variant="h4" color={theme.palette.primary.main}>Benefícios</Typography>
            </Grid>

            <GridContainers align="center" direction="row" sx={{
                mt: 3,
                width: '80%',
                borderRadius: '4px',
            }}>
                <Grid item xl={4} lg={4} md={4} sm={11} xs={11}>
                    <Box sx={{ px: 2, pb: 2 }}>
                        <Typography variant="h1" mb={-5} color={theme.palette.primary.main}>"</Typography>
                        <Typography variant="h6" color={theme.palette.primary.main}>Segurança e controle de acesso</Typography>
                        <Typography variant="body1"><BoxSpanGray>A atribuição de permissões de upload aos diferentes perfis de usuários garante a segurança dos dados, garantindo que as informações relevantes sejam exibidas. Isso proporciona maior controle e confidencialidade das informações.</BoxSpanGray></Typography>
                    </Box>
                </Grid>
                <Grid item xl={4} lg={4} md={4} sm={11} xs={11}>
                    <Box sx={{ backgroundColor: theme.palette.fundoPrincipal?.main, px: 2, pb: 2 }}>
                        <Typography variant="h1" mb={-5} color={theme.palette.primary.main}>"</Typography>
                        <Typography variant="h6" color={theme.palette.primary.main}>Padronização e redução de erros</Typography>
                        <Typography variant="body1"><BoxSpanGray>Com a possibilidade de criar templates específicos para cada tipo de arquivo, o sistema garante a padronização dos campos e formatos esperados. Isso reduz significativamente a ocorrência de erros e retrabalho, aumentando a eficiência dos processos.</BoxSpanGray></Typography>
                    </Box>
                </Grid>
                <Grid item xl={4} lg={4} md={4} sm={11} xs={11}>
                    <Box sx={{ px: 2, pb: 2 }}>
                        <Typography variant="h1" mb={-5} color={theme.palette.primary.main}>"</Typography>
                        <Typography variant="h6" color={theme.palette.primary.main}>Análise e tomada de decisões</Typography>
                        <Typography variant="body1"><BoxSpanGray>O sistema gera relatórios detalhados, mostrando informações como a quantidade de arquivos enviados, quem cadastrou determinado template, entre outros dados relevantes. Essas informações são essenciais para uma análise precisa e embasada, facilitando a tomada de decisões estratégicas.</BoxSpanGray></Typography>
                    </Box>
                </Grid>
            </GridContainers>

        </GridContainers>
    );
}

export default Page3;