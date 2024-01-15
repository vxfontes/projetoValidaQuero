import GridContainers from '../components/muiComponents/gridContainers';
import { FundoBackground } from '../components/background/fundoPrincipal';
import theme from '../theme';
import { FundoAzulPrimary } from '../components/background/fundoComponentes';
import img from '../assets/drawkit/cadastroTable.svg'
import { useScreenSize } from '../components/muiComponents/breakpoints';
import { IconFolderValida } from '../components/imagesStyle/logoStyle';
import { FormCadastro } from '../templates/loginCadastro/formsCadastro';


const Cadastro = () => {
    const { showTablet } = useScreenSize();

    return (
        <GridContainers align='center' direction='row'>
            <FundoBackground p={5} item xl={7} lg={7} md={8} sm={12} xs={12}>
                <IconFolderValida />

                <FormCadastro />
            </FundoBackground>

            {!showTablet && (
                <FundoAzulPrimary item xl={5} lg={5} md={4} sx={{ bgcolor: theme.palette.primary.main, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={img} width={'60%'} />
                </FundoAzulPrimary>
            )}
        </GridContainers>
    );
}

export default Cadastro;