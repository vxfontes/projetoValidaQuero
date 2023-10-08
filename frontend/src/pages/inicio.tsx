import Swal from "sweetalert2";
import { FundoBackground } from "../components/background/fundoPrincipal";
import api from "../logic/api/api";
import useUsuario from "../logic/core/functions/user";
import { GetTemplateProps } from "../logic/interfaces/template";
import InicioCadastro from "../templates/inicio/inicioCadastro";
import InicioUpload from "../templates/inicio/inicioUpload";
import InicioVisitante from "../templates/inicio/inicioVisitante";
import * as React from 'react';
import theme from "../theme";

const Inicio = () => {
    const { getUser } = useUsuario();

    const usuario = getUser().result;
    const [formatos, setFormatos] = React.useState([]);
    const [templates, setTemplates] = React.useState<GetTemplateProps[]>([]);
    const [message, setMessage] = React.useState("");
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {

        // get formatos
        api.get('/formato').then(res => {
            if (res.data.status === 'success') {
                setFormatos(res.data.formatos)
            }
        }).catch((error) => {
            Swal.fire({
                icon: error.response.data.status,
                iconColor: theme.palette.secondary.main,
                title: error.response.data.message,
                confirmButtonColor: theme.palette.secondary.main,
                confirmButtonText: 'Retornar',
            })
        })
        
        // get templates
        api.get('/template').then(res => {
            if (res.data.status === 'success') {
                if(res.data.templates.lenght === 0) setMessage("Não existem templates cadastrados")
                else setTemplates(res.data.templates)
            }
        }).catch((error) => {
            setMessage(error.response.data.message)
        }).finally(() => {
            setLoading(false)
        })
    }, []);

    return (
        <FundoBackground container>
            {usuario.verificado ? (
                <>
                    {usuario.perfil === 'Time' ? (
                        <InicioUpload loading={loading} formatos={formatos} templates={templates} message={message} />
                    ) : (
                        <InicioCadastro loading={loading} formatos={formatos} templates={templates} message={message} />
                    )}
                </>
            ) : (
                <InicioVisitante loading={loading} formatos={formatos} templates={templates} message={message} usuario={usuario} />
            )}
        </FundoBackground>
    );
}

export default Inicio;