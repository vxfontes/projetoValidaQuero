import { Box, CircularProgress } from "@mui/material";
import { AlertSweet } from "../components/alerts/sweetAlerts";
import { FundoBackground } from "../components/background/fundoPrincipal";
import python from "../logic/api/python";
import MainPageDashboard from '../templates/dashboard/dashboard';
import * as React from 'react';
import api from "../logic/api/api";
import { GetTemplatePuroProps } from "../logic/interfaces/template";

interface SubProps {
    value: number;
    total: number;
}
interface Props {
    arquivo: {
        aprovado: number;
        recusado: number;
    },
    arquivoData: {
        Ativo: SubProps;
        Pendente: SubProps;
        Desativado: SubProps;
    },
    templateData: {
        month: string;
        ativos: number;
        inativos: number;
    }[]
}

const Dashboard = () => {

    const [allData, setData] = React.useState<Props>();
    const [templates, setTemplates] = React.useState<GetTemplatePuroProps[]>([]);

    async function connect() {
        try {
            const response = await python.get('/dashboard/', {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });
            if (response.data) setData(response.data)
            else AlertSweet('Houve um erro ao tentar obter as requisições', 'error', false)
        } catch (error) {
            console.log(error);
            AlertSweet('Houve um erro ao tentar obter as requisições', 'error', false)
        }
    }

    React.useEffect(() => {
        connect();

        api.get(`/template/pendente`).then(res => {
            if (res.data.status === 'success') {
                if (res.data.templates === undefined) AlertSweet("Não existem templates pendentes", 'error', false)
                else {
                    setTemplates(res.data.templates)
                }
            } else AlertSweet(res.data.message, 'error', false)
        }).catch((error) => AlertSweet(error.response.data.message, 'error', false))
    }, []);

    return (
        <FundoBackground container>
            {allData ? (
                <MainPageDashboard arquivo={allData.arquivo} templates={templates} cardAtivo={allData.arquivoData.Ativo} cardPendente={allData.arquivoData.Pendente} templateData={allData.templateData} />
            ) : (
                <Box sx={{ width: '100%' }} display='flex' alignItems='center' justifyContent='center'>
                    <CircularProgress />
                </Box>
            )}
        </FundoBackground >
    );
}

export default Dashboard;