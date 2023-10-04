import { Box, Typography } from "@mui/material";
import theme from "../../../theme";
import { BoxSpanGray } from "../../muiComponents/boxes";
import BarChart from "../BarChart";

const TemplateCharts = () => {
    const data = [
        {
            month: 'Janeiro',
            ativos: 50,
            inativos: 20,
        },
        {
            month: 'Fevereiro',
            ativos: 60,
            inativos: 25,
        },
        {
            month: 'Março',
            ativos: 50,
            inativos: 20,
        },
        {
            month: 'Abril',
            ativos: 60,
            inativos: 25,
        },
        {
            month: 'Maio',
            ativos: 50,
            inativos: 20,
        },
        {
            month: 'Junho',
            ativos: 60,
            inativos: 25,
        },
    ];

    return (
        <Box sx={{
            backgroundColor: theme.palette.fundoComponente?.main,
            boxShadow: '1px 2px 2px rgba(0, 0, 0, 0.25)',
            borderRadius: '14px',
            mt: 2,
            pl: 3,
            pt: 2,
        }}>
            <Typography variant="body1"><BoxSpanGray>Templates</BoxSpanGray></Typography>
            <Typography variant="h5" color={theme.palette.primary.main} fontWeight='bold'>98</Typography>
            <Typography variant="body1"><BoxSpanGray>Templates cadastrados</BoxSpanGray></Typography>
            <BarChart data={data} />
        </Box>
    );
}

export default TemplateCharts;