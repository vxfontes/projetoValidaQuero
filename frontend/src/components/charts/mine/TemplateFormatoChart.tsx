import { Typography } from "@mui/material";
import { BoxSpanGray } from "../../muiComponents/boxes";
import PieChartFormato, { PieChartProps } from "../PieFormatos";

const TemplateFormatoCharts = ({ data }: { data: PieChartProps[] }) => {
    return (
        <>
            <Typography variant="body1"><BoxSpanGray>Quantidade de templates por formato</BoxSpanGray></Typography>
            <PieChartFormato data={data} />
        </>
    );
}

export default TemplateFormatoCharts;