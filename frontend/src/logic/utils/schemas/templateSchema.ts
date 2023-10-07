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

export const schemaTemplateCampos = yup.object().shape({
    campos: yup.array()
        .of(yup.object().shape({
            nome: yup
                .string()
                .required("Nome do campo"),
            tipo: yup
                .mixed()
                .required("Tipagem"),
            nulo: yup
                .bool()
                .required("Pode ser nulo?"),
        })),
})