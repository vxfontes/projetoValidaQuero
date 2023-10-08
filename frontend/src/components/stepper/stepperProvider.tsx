import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { Box, Button, styled } from '@mui/material';
import { AiFillCheckCircle } from 'react-icons/ai'
import useTemplate from '../../logic/core/functions/template';


export const QontoStepIconRoot = styled('div')<{ ownerState: { active?: boolean } }>(
    ({ theme, ownerState }) => ({
        color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
        display: 'flex',
        height: 22,
        alignItems: 'center',
        ...(ownerState.active && {
            color: theme.palette.primary.main,
        }),
        '& .QontoStepIcon-completedIcon': {
            color: theme.palette.primary.main,
            zIndex: 1,
            fontSize: 18,
        },
        '& .QontoStepIcon-circle': {
            width: 8,
            height: 8,
            borderRadius: '50%',
            backgroundColor: 'currentColor',
        },
    }),
);

export const QontoConnector = styled(StepConnector)(({ theme }: any) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 10,
        left: 'calc(-50% + 16px)',
        right: 'calc(50% + 16px)',
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: theme.palette.primary.main,
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: theme.palette.primary.main,
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
        borderTopWidth: 3,
        borderRadius: 1,
    },
}));

export function QontoStepIcon(props: any) {
    const { active, completed, className } = props;

    return (
        <QontoStepIconRoot ownerState={{ active }} className={className}>
            {completed ? (
                <AiFillCheckCircle className="QontoStepIcon-completedIcon" />
            ) : (
                <div className="QontoStepIcon-circle" />
            )}
        </QontoStepIconRoot>
    );
}

export interface StepperButtonsProps {
    handleNext: () => void;
    handleBack: () => void;
    isLastStep: boolean;
}

export const StepperButtons: React.FC<StepperButtonsProps> = ({ handleNext, handleBack, isLastStep }) => {

    const {templateFinalizando} = useTemplate()

    function click() {
        if (!isLastStep) templateFinalizando()
        handleNext();
    }
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button disabled={isLastStep ? true: false} color="primary" variant="contained" onClick={handleBack} sx={{ mr: 1 }}>
                Voltar
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button color="primary" variant="contained" onClick={click}>Finalizar</Button>
        </Box>
    );
};