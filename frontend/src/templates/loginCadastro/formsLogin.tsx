import { Typography, Button, styled, Link, CircularProgress, Box } from '@mui/material';
import theme from '../../theme';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import { schemaLogin } from '../../logic/utils/schemas/loginCadastro';
import { TextFieldOutlined, TextFieldOutlinedSenha } from '../../components/muiComponents/textFields';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { UserLoginProps } from '../../logic/interfaces/user';
import useUsuario from '../../logic/core/functions/user';
import Swal from 'sweetalert2';

const FormContainer = styled(Box)({
    display: 'block',
    width: '80%',
    marginLeft: '10%',
    marginTop: '18%',
    [theme.breakpoints.down(`sm`)]: {
        marginTop: '30%',
    }
});

const field100 = {
    minWidth: '100%',
    maxWidth: '100%',
    mb: 2
}

export const FormLogin = () => {
    const { login } = useUsuario();

    function onSubmit(values: UserLoginProps, { setSubmitting, setStatus }: FormikHelpers<UserLoginProps>) {
        const result = login(values);
        if (result.status === 'success') {
            Swal.fire({
                icon: 'success',
                iconColor: theme.palette.primary.main,
                title: 'Sucesso!',
                text: result.result,
                confirmButtonColor: theme.palette.primary.main,
                confirmButtonText: 'Continue',
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = '/';
                }
            });
        } else {
            Swal.fire({
                icon: 'error',
                iconColor: theme.palette.secondary.main,
                title: 'Houve um erro',
                text: result.result,
                confirmButtonColor: theme.palette.secondary.main,
                confirmButtonText: 'Retornar',
            })
        }
        setStatus(result.result);
        setSubmitting(false);
    }

    return (
        <Formik
            initialValues={{
                matricula: '',
                senha: '',
            }}
            validationSchema={schemaLogin}
            onSubmit={onSubmit}
        >
            {({ isSubmitting, status }) => (
                <Form>
                    <FormContainer>
                        <Typography mb={1} variant="h6" fontWeight={'medium'} color="initial">Informe suas credenciais</Typography>

                        <Field sx={field100} name='matricula' component={TextFieldOutlined} label="Matrícula" type='number' />
                        <Field sx={field100} name='senha' component={TextFieldOutlinedSenha} label="Senha" type='password' />

                        <Button sx={{ my: 1 }} variant="contained" color="primary" type='submit' fullWidth startIcon={isSubmitting ? <CircularProgress size='1rem' color='secondary' /> : null} disabled={isSubmitting}>
                            {isSubmitting ? 'FAZENDO LOGIN' : 'LOGIN'}
                            <AiOutlineArrowRight style={{ marginLeft: '0.4em' }} />
                        </Button>

                        <Link href='/cadastro' sx={{ textDecoration: 'none' }}>
                            <Button variant="contained" color="secondary" fullWidth>se cadastre</Button>
                        </Link>

                        {status && <Typography variant="body1" mt={2} color={status.startsWith('Usuário não encontrado') ? 'error' : 'success'}>{status}</Typography>}
                    </FormContainer>
                </Form>
            )}
        </Formik>

    );
}