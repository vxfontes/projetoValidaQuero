import { Box, Typography } from "@mui/material";
import theme from "../../../theme";
import { BoxSpanGray } from "../../muiComponents/boxes";
import PieChart, { PieChartProps } from "../PieChart";

export interface TemplateChartProps {
    month: string;
    ativos: number;
    inativos: number;
}

export const ArquivoCharts = ({ approved, rejected }: PieChartProps) => {
    return (
        <Box sx={{
            backgroundColor: theme.palette.fundoComponente?.main,
            boxShadow: '1px 2px 2px rgba(0, 0, 0, 0.25)',
            borderRadius: '14px',
            pl: 3,
            py: 2,
        }}>
            <Typography variant="body1"><BoxSpanGray>Status dos arquivos</BoxSpanGray></Typography>
            <PieChart approved={approved} rejected={rejected} />
            <Typography variant="h5" color={theme.palette.primary.main} fontWeight='bold'>{approved + rejected}</Typography>
            <Typography variant="body1"><BoxSpanGray>Arquivos já foram verificados</BoxSpanGray></Typography>
        </Box>
    )
}