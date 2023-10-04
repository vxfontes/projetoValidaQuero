import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import CircularProgress from "@mui/material/CircularProgress"
import { PropsButtonsNav } from "../../logic/interfaces/stepper"

export const FormNavigation = (values: PropsButtonsNav) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 3, pb: 1 }}>
            {values.numberPage === 0 ? (
                <Button color='primary' variant='contained' sx={{ mr: 1 }} onClick={values.returnClick} disabled>Voltar</Button>
            ) : (
                <Button color='primary' variant='contained' sx={{ mr: 1 }} onClick={values.returnClick} disabled={values.submitting}>Voltar</Button>
            )}
            <Box sx={{ flex: '1 1 auto' }} />
            <Button color='primary' variant='contained' type='submit' startIcon={values.submitting ? <CircularProgress size='1rem' color='secondary' /> : null}>
                {values.submitting ? values.numberPage === 3 ? 'Finalizando' : 'Avançando' : values.numberPage === 3 ? 'Finalizar' : 'Próximo'}
            </Button>
        </Box >
    )
}