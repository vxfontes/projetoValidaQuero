import { FundoBackground } from "../components/background/fundoPrincipal";
import useUsuario from "../logic/core/functions/user";
import InicioCadastro from "../templates/inicio/inicioCadastro";
import InicioUpload from "../templates/inicio/inicioUpload";
import InicioVisitante from "../templates/inicio/inicioVisitante";

const Inicio = () => {
    const { getUser } = useUsuario();
    const usuario = getUser().result;

    return (
        <FundoBackground container>
            {usuario.verificado ? (
                <>
                    {usuario.perfil === 'Time' ? (
                        <InicioUpload />
                    ) : (
                        <InicioCadastro />
                    )}
                </>
            ) : (
                <InicioVisitante usuario={usuario} />
            )}
        </FundoBackground>
    );
}

export default Inicio;