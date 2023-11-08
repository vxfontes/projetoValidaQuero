import { Box, CircularProgress } from "@mui/material";
import { AlertSweet } from "../components/alerts/sweetAlerts";
import { FundoBackground } from "../components/background/fundoPrincipal";
import python from "../logic/api/python";
import MainPageDashboard from '../templates/dashboard/dashboard';
import * as React from 'react';
import api from "../logic/api/api";
import { GetTemplateProps, GetTemplatePuroProps } from "../logic/interfaces/template";
import { UserVerifyProps } from "../logic/interfaces/user";
import { FileProps } from "../logic/interfaces/file";

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
    const [disabled, setDisabled] = React.useState(false);
    const [templates, setTemplates] = React.useState<GetTemplatePuroProps[]>([]);
    const [users, setUsers] = React.useState<UserVerifyProps[]>([]);
    const [files, setFiles] = React.useState<FileProps[]>([]);
    const [formatos, setFormatos] = React.useState([]);
    const [templatesAll, setTemplatesAll] = React.useState<GetTemplateProps[]>([]);
    const [messageTemplate, setMessageTemplate] = React.useState("");
    const [loading, setLoading] = React.useState(true);

    async function getData() {
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

    async function getArquivos() {
        try {
            const response = await python.get('/file/', {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });
            if (response.data) setFiles(response.data)
            else AlertSweet('Houve um erro ao tentar obter as requisições', 'error', false)
        } catch (error) {
            console.log(error);
            AlertSweet('Houve um erro ao tentar obter as requisições', 'error', false)
        }
    }

    React.useEffect(() => {
        api.get(`/template/`).then(res => {
            if (res.data.status === 'success') {
                if (res.data.templates.length === 0) setMessageTemplate("Não existem templates cadastrados pelo usuário")
                else setTemplatesAll(res.data.templates)
            }
        }).catch((error) => setMessageTemplate(error.response.data.message)
        ).finally(() => setLoading(false));

        api.get(`/template/pendente`).then(res => {
            if (res.data.status === 'success') {
                if (res.data.templates === undefined) AlertSweet("Não existem templates pendentes", 'error', false)
                else {
                    setTemplates(res.data.templates)
                }
            } else AlertSweet(res.data.message, 'error', false)
        }).catch((error) => AlertSweet(error.response.data.message, 'error', false))

        api.get(`/users/pendentes`).then(res => {
            if (res.data.status === 'success') {
                if (res.data.usuarios === undefined) {
                    setDisabled(true)
                    AlertSweet("Não existem usuários não verificados", 'error', false)
                }
                else setUsers(res.data.usuarios)
            } else {
                setDisabled(true)
                AlertSweet(res.data.message, 'error', false)
            }
        }).catch((error) => {
            setDisabled(true)
            AlertSweet(error.response.data.message, 'error', false)
        });

        api.get('/formato').then(res => {
            if (res.data.status === 'success') setFormatos(res.data.formatos)
        }).catch((error) => AlertSweet(error.response.data.message, 'error', false));

        getData();
        getArquivos();
    }, []);

    return (
        <FundoBackground container>
            {allData ? (
                <MainPageDashboard formatos={formatos} templates={templatesAll} loading={loading} 
                    message={messageTemplate} files={files} disabled={disabled} users={users} 
                    arquivo={allData.arquivo} templatesPendente={templates} cardAtivo={allData.arquivoData.Ativo} 
                    cardPendente={allData.arquivoData.Pendente} templateData={allData.templateData} />
            ) : (
                <Box sx={{ width: '100%' }} display='flex' alignItems='center' justifyContent='center'>
                    <CircularProgress />
                </Box>
            )}
        </FundoBackground >
    );
}

export default Dashboard;