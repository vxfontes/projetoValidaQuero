import { Typography, Button, styled, Grid, Link, MenuItem, CircularProgress } from '@mui/material';
import theme from '../../theme';
import { Formik, Form, Field } from 'formik';
import { schemaCadastro } from '../../logic/utils/schemas/loginCadastro';
import { FieldSelectOutlined, TextFieldOutlined, TextFieldOutlinedSenha } from '../../components/muiComponents/textFields';
import { field100 } from '../../styles/fieldStyle';
import { UserFormProps } from '../../logic/interfaces/user';
import useUsuario from '../../logic/core/functions/user';
import { perfilArray } from '../../data/perfil';
import Swal from 'sweetalert2';
import api from '../../logic/api/api';
import { AlertSweet } from '../../components/alerts/sweetAlerts';

export const FormContainer = styled(Grid)({
    width: '80%',
    marginLeft: '10%',
    marginTop: '13%',
    [theme.breakpoints.down(`sm`)]: {
        marginTop: '16%',
    }
});

const fieldpr = {
    mb: 2,
    pr: 1,
    [theme.breakpoints.down('md')]: {
        pr: 0
    }
}

const fieldpl = {
    mb: 2,
    pl: 1,
    [theme.breakpoints.down('md')]: {
        pl: 0
    }
}

export const FormCadastro = () => {
    const { login } = useUsuario()

    async function onSubmit(values: UserFormProps) {
        api.post('/users', values).then((res) => {
            if (res.data.status === 'success') {
                login(res.data.usuario)
                Swal.fire({
                    icon: res.data.status,
                    iconColor: theme.palette.primary.main,
                    title: res.data.message,
                    confirmButtonColor: theme.palette.primary.main,
                    confirmButtonText: 'Continue',
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.href = '/';
                    }
                });
            }
        }).catch(error => AlertSweet(error.response.data.message, 'error', false))
    }

    return (
        <Formik initialValues={{
            nome: '',
            matricula: '',
            perfil: '',
            senha: '',
            confirmarSenha: '',
        }}
            validationSchema={schemaCadastro}
            onSubmit={onSubmit}>
            {({ isSubmitting }) => (
                <Form>
                    <FormContainer container>
                        <Typography mb={1} variant="h6" fontWeight={'medium'} color="initial">Faça o cadastro na plataforma</Typography>

                        <Grid mb={2} item xl={12} lg={12} md={12} sm={12} xs={12}>
                            <Field sx={field100} name='nome' component={TextFieldOutlined} label="Nome completo" />
                        </Grid>

                        <Grid sx={fieldpr} item xl={6} lg={6} md={6} sm={12} xs={12}>
                            <Field sx={field100} name='matricula' component={TextFieldOutlined} label="Matrícula" type='number' />
                        </Grid>
                        <Grid sx={fieldpl} item xl={6} lg={6} md={6} sm={12} xs={12}>
                            <Field sx={field100} name='perfil' label='Perfil' component={FieldSelectOutlined}>
                                {perfilArray.map(perfil => <MenuItem key={perfil} value={perfil}>{perfil}</MenuItem>)}
                            </Field>
                        </Grid>

                        <Grid sx={fieldpr} item xl={6} lg={6} md={6} sm={12} xs={12}>
                            <Field sx={field100} name='senha' component={TextFieldOutlinedSenha} label="Senha" type='password' />
                        </Grid>
                        <Grid sx={fieldpl} item xl={6} lg={6} md={6} sm={12} xs={12}>
                            <Field sx={field100} name='confirmarSenha' component={TextFieldOutlinedSenha} label="Confirmar senha" type='password' />
                        </Grid>

                        <Button type='submit' sx={{ mb: 2 }} variant="contained" color="primary" fullWidth startIcon={isSubmitting ? <CircularProgress size='1rem' color='secondary' /> : null}>
                            {isSubmitting ? 'Finalizando' : 'Cadastrar'}
                        </Button>
                        <Link href='/login' sx={{ width: '100%', textDecoration: 'none' }}>
                            <Button variant="contained" color="secondary" fullWidth>Já possui conta?</Button>
                        </Link>
                    </FormContainer>
                </Form>
            )}
        </Formik>
    );
}