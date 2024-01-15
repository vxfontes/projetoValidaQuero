import Typography from '@mui/material/Typography'
import { StepperButtonsProps } from '../stepperProvider';
import { Box, Button } from '@mui/material';

const Step4: React.FC<StepperButtonsProps> = ({ handleNext, handleBack }) => (
    <>
        <Typography variant="h5" color="initial">Template cadastrado com sucesso!</Typography>

        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button disabled color="primary" variant="contained" onClick={handleBack} sx={{ mr: 1 }}>
                Voltar
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button color="primary" variant="contained" onClick={handleNext}>Concluir</Button>
        </Box>
    </>
);

export default Step4;