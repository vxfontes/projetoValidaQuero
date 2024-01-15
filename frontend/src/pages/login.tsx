import GridContainers from '../components/muiComponents/gridContainers';
import { FundoBackground } from '../components/background/fundoPrincipal';
import theme from '../theme';
import { FundoAzulPrimary } from '../components/background/fundoComponentes';
import img from '../assets/drawkit/loginTable.svg';
import { useScreenSize } from '../components/muiComponents/breakpoints';
import { IconFolderValida } from '../components/imagesStyle/logoStyle';
import { FormLogin } from '../templates/loginCadastro/formsLogin';

const Login = () => {
    const { showTablet } = useScreenSize();

    return (
        <GridContainers align='center' direction='row'>
            <FundoBackground p={5} item xl={5} lg={5} md={4} sm={12} xs={12}>
                <IconFolderValida />

                <FormLogin />

            </FundoBackground>

            {!showTablet && (
                <FundoAzulPrimary item xl={7} lg={7} md={8} sx={{ bgcolor: theme.palette.primary.main, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={img} width={'80%'} />
                </FundoAzulPrimary>
            )}
        </GridContainers>
    );
}

export default Login;