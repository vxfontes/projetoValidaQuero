import * as React from 'react';
import DialogSlide from '../muiComponents/dialog';
import { Box, Grid, Step, StepLabel, Stepper, styled, Typography, Button } from '@mui/material';
import { QontoConnector, QontoStepIcon } from './stepperProvider';
import Step1 from './steps/step1';
import api from '../../logic/api/api';
import Swal from 'sweetalert2';
import theme from '../../theme';
import { FormatoProps } from '../../logic/interfaces/formato';
import GridContainers from '../muiComponents/gridContainers';

interface DialogProps {
    open: boolean;
    handleClose: () => void;
}


const Container = styled(Grid)({
    background: '#FFFFFF',
})

const steps = ['', '', ''];

const CriarTemplate = ({ handleClose, open }: DialogProps) => {
    const [activeStep, setActiveStep] = React.useState(0);
    const [formatos, setFormatos] = React.useState<FormatoProps[]>([]);

    React.useEffect(() => {
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
    }, [])

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleCloseModal = () => {
        setActiveStep(0);
        handleClose();
    };


    return (
        <DialogSlide open={open} handleClose={handleClose}>
            <Container container display='block' justifyContent={'center'} textAlign={'center'} spacing={3} px={6} py={3}>

                <Typography variant="h5" color="initial" fontWeight='light' mt={4} mb={1} align='left'>Criação de template</Typography>

                <Stepper alternativeLabel activeStep={activeStep} connector={<QontoConnector />}>
                    {steps.map((label, index) => {
                        const stepProps: { completed?: boolean } = {};
                        const labelProps: {
                            optional?: React.ReactNode;
                        } = {};
                        return (
                            <Step key={index} {...stepProps}>
                                <StepLabel {...labelProps} StepIconComponent={QontoStepIcon}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>

                {/* tela final e todas as outras telas */}
                {activeStep === steps.length ? (
                    <>
                        <h1>asdasd asds fwfwef gefv</h1>
                        <Button variant="text" color="primary" onClick={handleCloseModal}>
                            sair
                        </Button>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Box sx={{ flex: '1 1 auto' }} />
                        </Box>
                    </>
                ) : (
                    <GridContainers sx={{mt: 2}} align='center' direction='column' justify='center'>
                        {activeStep === 0 && (
                            <Step1 numberPage={0} advanceClick={() => handleNext()} returnClick={() => handleBack()} formatos={formatos} />
                        )}
                        {activeStep === 1 && (
                            <>
                                <h1>minha pagina 2</h1>
                                <Button variant="text" color="primary" onClick={() => handleNext()}>
                                    avanca
                                </Button>
                            </>
                        )}
                        {activeStep === 2 && (
                            <>
                                <h1>pg 3</h1>
                                <Button variant="text" color="primary" onClick={() => handleNext()}>
                                    avanca
                                </Button>
                                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                    <Box sx={{ flex: '1 1 auto' }} />
                                </Box>
                            </>
                        )}
                    </GridContainers>
                )}

            </Container>
        </DialogSlide>
    );
}

export default CriarTemplate;