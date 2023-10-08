import Typography from '@mui/material/Typography'
import { StepperButtons, StepperButtonsProps } from '../stepperProvider';

const Step3: React.FC<StepperButtonsProps> = ({ handleNext, handleBack, isLastStep }) => {

    return (
        <>
            <Typography variant="h5" color="initial">Cadastro de template registrado com sucesso!</Typography>
            <Typography variant="h6" color="initial" fontWeight='light'>Deseja confirmar?</Typography>

            <StepperButtons handleNext={handleNext} handleBack={handleBack} isLastStep={isLastStep} />
        </>
    );
}

export default Step3;