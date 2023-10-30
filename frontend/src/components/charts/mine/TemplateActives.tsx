import { Box, Typography } from "@mui/material";
import theme from "../../../theme";
import { BoxSpanGray } from "../../muiComponents/boxes";
import BarChart from "../BarChart";
import { TemplateChartProps } from "./ArquivoRelatio";

const TemplateCharts = ({ data }: {data: TemplateChartProps[]}) => {
    return (
        <Box sx={{
            backgroundColor: theme.palette.fundoComponente?.main,
            boxShadow: '1px 2px 2px rgba(0, 0, 0, 0.25)',
            borderRadius: '14px',
            mt: 2,
            pl: 3,
            pt: 2,
        }}>
            <Typography variant="body1"><BoxSpanGray>Templates adicionados por mês</BoxSpanGray></Typography>
            <BarChart data={data} />
        </Box>
    );
}

export default TemplateCharts;