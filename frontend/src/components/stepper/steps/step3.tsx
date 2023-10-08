import Typography from '@mui/material/Typography'
import { StepperButtonsProps } from '../stepperProvider';
import { Box, Button } from '@mui/material';
import api from '../../../logic/api/api';
import Swal from 'sweetalert2';
import theme from '../../../theme';
import { TemplateState } from '../../../data/templateState';

const Step3: React.FC<StepperButtonsProps> = ({ handleNext, handleBack }) => {

    function click() {
        api.post('/template', TemplateState).then((res) => {
            if (res.data.status === 'success') handleNext()
        }).catch(error => {
            Swal.fire({
                icon: error.response.data.status,
                iconColor: theme.palette.secondary.main,
                title: error.response.data.message,
                confirmButtonColor: theme.palette.secondary.main,
                confirmButtonText: 'Retornar',
            })
        })
    }

    return (
        <>
            <Typography variant="h5" color="initial">Cadastro de template registrado com sucesso!</Typography>
            <Typography variant="h6" color="initial" fontWeight='light'>Deseja confirmar?</Typography>

            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button color="primary" variant="contained" onClick={handleBack} sx={{ mr: 1 }}>
                    Voltar
                </Button>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button color="primary" variant="contained" onClick={click}>Finalizar</Button>
            </Box>
        </>
    );
}

export default Step3;