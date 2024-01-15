import * as yup from 'yup';

export const schemaLogin = yup.object().shape({
    matricula: yup
        .string()
        .required('Digite sua matrícula'),
    senha: yup
        .string()
        .required('Digite sua senha'),
})

export const schemaCadastro = yup.object().shape({
    nome: yup
        .string()
        .required("Digite seu nome"),
    matricula: yup
        .string()
        .required('Digite sua matrícula'),
    perfil: yup
        .mixed()
        .required("Informe qual seu tipo de perfil"),
    senha: yup
        .string()
        .required('Digite sua senha'),
    confirmarSenha: yup
        .string()
        .oneOf([yup.ref('senha'), ''], 'As senhas não coincidem')
        .required('Confirme sua senha'),
})