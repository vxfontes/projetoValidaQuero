import * as yup from 'yup'

export const schemaCadastroTemplate = yup.object().shape({
    titulo: yup
        .string()
        .required("Digite o nome do template"),
    descricao: yup
        .string()
        .required('Digite uma pequena descrição'),
    formato: yup
        .mixed()
        .required("Informe qual o formato do template"),
})