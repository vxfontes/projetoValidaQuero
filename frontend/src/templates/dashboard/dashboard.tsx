import * as React from 'react';
import { AiOutlineFilePdf, AiOutlineUsergroupAdd } from 'react-icons/ai';
import { Grid } from "@mui/material";
import GridContainers from "../../components/muiComponents/gridContainers";
import TemplateCharts from "../../components/charts/mine/TemplateActives";
import { CardDashBoardInfo, TemplateBoxInfoProps } from "../../components/dashboard/CardData";
import DashButton from "../../components/muiComponents/dashButton";
import { useScreenSize } from '../../components/muiComponents/breakpoints';
import img from '../../assets/drawkit/dashTable.svg';
import TableTemplates from './tableTemplates';
import { GetTemplatePuroProps } from '../../logic/interfaces/template';
import { TemplateChartProps, ArquivoCharts } from '../../components/charts/mine/ArquivoRelatio';


export interface DashMainProps {
    templateData: TemplateChartProps[];
    cardAtivo: TemplateBoxInfoProps;
    cardPendente: TemplateBoxInfoProps;
    templates: GetTemplatePuroProps[];
    arquivo: {
        aprovado: number;
        recusado: number;
    }
}

const MainPageDashboard = ({templateData, cardAtivo, cardPendente, templates, arquivo}: DashMainProps) => {
    
    const [open, setOpen] = React.useState(false);
    const {showTablet} = useScreenSize()
    
    return (
        <GridContainers sx={{ mt: 5, mx: 2, alignItems: 'center', justifyContent: 'center' }} align='center' direction='row' spacing={2}>

            {/* primeira linha */}
            <Grid item xl={5} lg={5} md={5} sm={11} xs={11}>
                <TemplateCharts data={templateData} />
            </Grid>

            <Grid mx={2} item xl={2} lg={2} md={2} sm={11} xs={11}>
                <CardDashBoardInfo title="Templates ativos" value={cardAtivo.value} total={cardAtivo.total} isPending={false} />
                <CardDashBoardInfo title="Templates pendentes" value={cardPendente.value} total={cardPendente.total} isPending={true} />
            </Grid>

            <Grid mx={2} item xl={2} lg={2} md={2} sm={11} xs={11}>
                <DashButton icon={<AiOutlineFilePdf size={32} color='black' />}
                    text="Exportar"
                    onClick={() => setOpen(true)}
                />
                <DashButton icon={<AiOutlineUsergroupAdd size={32} color='black' />}
                    text="Usuários"
                    onClick={() => setOpen(true)}
                />
            </Grid>

            {!showTablet && (
                <Grid sx={{ ml: -4 }} mx={2} item xl={2} lg={2} md={2} sm={11} xs={11}>
                    <img src={img} alt="Dashboard" width='100%' />
                </Grid>
            )}

            {/* segunda linha */}
            <Grid item xl={7} lg={7} md={7} sm={11} xs={11}>
                <TableTemplates data={templates} />
            </Grid>
            <Grid item m={2} xl={4} lg={4} md={4} sm={12} xs={12}>
                <ArquivoCharts approved={arquivo.aprovado} rejected={arquivo.recusado} />
            </Grid>
        </GridContainers>
    );
}

export default MainPageDashboard;