import { FundoBackground } from "../components/background/fundoPrincipal";
import api from "../logic/api/api";
import useUsuario from "../logic/core/functions/user";
import { GetTemplateProps } from "../logic/interfaces/template";
import InicioCadastro from "../templates/inicio/inicioCadastro";
import InicioUpload from "../templates/inicio/inicioUpload";
import InicioVisitante from "../templates/inicio/inicioVisitante";
import * as React from 'react';
import { AlertSweet } from "../components/alerts/sweetAlerts";
import { PieChartProps } from "../components/charts/PieFormatos";

const Inicio = () => {
    const { getUser } = useUsuario();

    const usuario = getUser().result;
    const [formatos, setFormatos] = React.useState([]);
    const [templates, setTemplates] = React.useState<GetTemplateProps[]>([]);
    const [message, setMessage] = React.useState("");
    const [loading, setLoading] = React.useState(true);
    const [formatoInfo, setFormatoInfo] = React.useState<PieChartProps[]>([]);

    React.useEffect(() => {

        // get formatos
        api.get('/formato').then(res => {
            if (res.data.status === 'success') setFormatos(res.data.formatos)
        }).catch((error) => AlertSweet(error.response.data.message, 'error', false))

        // get infos
        api.get('/getformato').then(res => {
            console.log(res)
            if (res.data.status === 'success') setFormatoInfo(res.data.result)
        }).catch((error) => AlertSweet(error.response.data.message, 'error', false))
        
        // get templates
        api.get('/template').then(res => {
            if (res.data.status === 'success') {
                if(res.data.templates.lenght === 0) setMessage("Não existem templates cadastrados")
                else setTemplates(res.data.templates)
            }
        }).catch((error) => setMessage(error.response.data.message)
        ).finally(() => setLoading(false))
    }, []);

    return (
        <FundoBackground container>
            {usuario.verificado ? (
                <>
                    {usuario.perfil === 'Time' ? (
                        <InicioUpload formatoInfo={formatoInfo} loading={loading} formatos={formatos} templates={templates} message={message} />
                    ) : (
                        <InicioCadastro formatoInfo={formatoInfo} loading={loading} formatos={formatos} templates={templates} message={message} />
                    )}
                </>
            ) : (
                <InicioVisitante formatoInfo={formatoInfo} loading={loading} formatos={formatos} templates={templates} message={message} usuario={usuario} />
            )}
        </FundoBackground>
    );
}

export default Inicio;