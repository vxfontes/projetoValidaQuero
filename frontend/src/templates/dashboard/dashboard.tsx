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
import { GetTemplatePuroProps, TemplateContainerProps } from '../../logic/interfaces/template';
import { TemplateChartProps, ArquivoCharts } from '../../components/charts/mine/ArquivoRelatio';
import { UserVerifyProps } from '../../logic/interfaces/user';
import ModalUsers from '../../components/dashboard/modalUserts';
import { FileProps } from '../../logic/interfaces/file';
import FileContainer from '../../components/files/container';
import TemplateContainer from '../../components/templates/container';


export interface DashMainProps extends TemplateContainerProps {
    templateData: TemplateChartProps[];
    cardAtivo: TemplateBoxInfoProps;
    cardPendente: TemplateBoxInfoProps;
    templatesPendente: GetTemplatePuroProps[];
    arquivo: {
        aprovado: number;
        recusado: number;
    },
    users: UserVerifyProps[];
    disabled: boolean;
    files: FileProps[];
}

const MainPageDashboard = ({ disabled, users, templateData, cardAtivo, cardPendente, templates, templatesPendente, arquivo, files, formatos, loading, message }: DashMainProps) => {

    const [open, setOpen] = React.useState(false);
    const { showTablet } = useScreenSize()

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
                    onClick={() => console.log('exportando')}
                />
                <DashButton icon={<AiOutlineUsergroupAdd size={32} color='black' />}
                    disabled={disabled}
                    text="Usuários"
                    onClick={() => setOpen(true)}
                />
            </Grid>

            <ModalUsers open={open} handleClose={() => setOpen(false)} users={users} />

            {!showTablet && (
                <Grid sx={{ ml: -4 }} mx={2} item xl={2} lg={2} md={2} sm={11} xs={11}>
                    <img src={img} alt="Dashboard" width='100%' />
                </Grid>
            )}

            {/* segunda linha */}
            <Grid item xl={7} lg={7} md={7} sm={11} xs={11}>
                <TableTemplates data={templatesPendente} />
            </Grid>
            <Grid item mx={2} xl={4} lg={4} md={4} sm={12} xs={12}>
                <ArquivoCharts approved={arquivo.aprovado} rejected={arquivo.recusado} />
            </Grid>

            {/* terceira linha */}
            <Grid mb={2} item xl={8} lg={8} md={8} sm={12} xs={12}>
                <TemplateContainer itemsPerPage={4} onlyActive={false} formatos={formatos} templates={templates} message={message} loading={loading} />
            </Grid>
            <Grid mx={2} mt={-3} mb={2} item xl={3} lg={3} md={3} sm={12} xs={12}>
                <FileContainer itemsPerPage={7} arquivos={files} all />
            </Grid>
        </GridContainers>
    );
}

export default MainPageDashboard;