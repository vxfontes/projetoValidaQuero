import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import { FormNavigation } from "../formnavigate";
import { schemaTemplateCampos } from "../../../logic/utils/schemas/templateSchema";
import { Box, Button, IconButton, MenuItem, Typography, styled } from "@mui/material";
import {AiFillDelete} from 'react-icons/ai'
import useTemplate from "../../../logic/core/functions/template";
import { PropsButtons } from "../../../logic/interfaces/stepper";
import { TextFieldFilled } from "../../muiComponents/textFields";
import { fieldFormik } from "../../../styles/fieldStyle";

interface ErrorProps {
    name: string,
    label: string
}

export const Errormsg = styled(Typography)({
    color: '#d42c2c'
});

function ErrorPlayer({ name, label }: ErrorProps) {
    return (
        <>
            <Field sx={fieldFormik} name={name}
                component={TextFieldFilled} label={label} />
            <ErrorMessage name={name} component={Errormsg} />
        </>
    )
}

const Step2 = ({ advanceClick, returnClick, numberPage }: PropsButtons) => {

    const { templateDescription } = useTemplate()

    const enviando = (values: any) => {
        advanceClick();
    }

    return (
        <>
            <Formik
                initialValues={{
                    campos: [
                        {
                            nome: '',
                            tipo: '',
                            nulo: false,
                        },
                    ],
                }}
                onSubmit={enviando}
                validationSchema={schemaTemplateCampos}>
                {({ isSubmitting, values, errors }) => (
                    <Form>
                        <Box sx={{ textAlign: 'center', justifyContent: 'center', alignContent: 'center' }}>

                            <FieldArray name="campos">
                                {({ insert, remove, push }) => (
                                    <Box>
                                        <Typography variant="body1" color="initial" align="left" ml={'10%'} my={1} mt={1}>Insira os campos do template</Typography>

                                        {values.campos.length > 0 &&
                                            values.campos.map((campo, index) => (
                                                <Box key={index} sx={{ display: 'flex', textAlign: 'center', justifyContent: 'center', mb: 1, gap: 2 }}>
                                                    {errors.campos === undefined ? (
                                                        <Box sx={{ display: 'flex', gap: 1, minWidth: '100%', maxWidth: '100%' }}>
                                                            <Field sx={fieldFormik} name={`campos.${index}.nome`}
                                                                component={TextFieldFilled} label="Nome do campo" />

                                                            <Field sx={fieldFormik} name={`campos.${index}.tipo`}
                                                                component={TextFieldFilled} label="Tipo do campo" />
                                                            <Field sx={fieldFormik} name={`campos.${index}.nulo`}
                                                                component={TextFieldFilled} label="Nulidade do campo" />

                                                            <IconButton aria-label="" onClick={() => remove(index)}>
                                                                <AiFillDelete style={{ color: 'black' }} />
                                                            </IconButton>
                                                        </Box>
                                                    ) : (
                                                        <>
                                                            <ErrorPlayer name={`campos.${index}.nome`} label="Nome do campo" />
                                                            <ErrorPlayer name={`campos.${index}.tipo`} label="Tipo do campo" />
                                                            <ErrorPlayer name={`campos.${index}.nulo`} label="Nulidade do campo" />
                                                        </>
                                                    )}
                                                </Box>

                                            ))}

                                        <Button variant="text" color="primary" onClick={() => push({ nome: '', tipo: '', nulo: false })}>
                                            Adicionar mais um campo
                                        </Button>
                                    </Box>
                                )}
                            </FieldArray>

                            <FormNavigation submitting={isSubmitting} numberPage={numberPage} advanceClick={advanceClick} returnClick={returnClick} />
                        </Box>
                    </Form>
                )}
            </Formik>
        </>
    );
}

export default Step2;