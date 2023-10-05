import { Field, Form, Formik } from "formik";
import { FormNavigation } from "../formnavigate";
import { schemaCadastroTemplate } from "../../../logic/utils/schemas/templateSchema";
import { field100 } from "../../../styles/fieldStyle";
import { FieldSelectFilled, TextFieldFilled } from "../../muiComponents/textFields";
import { Box, Grid, MenuItem } from "@mui/material";
import { FormatoProps } from '../../../logic/interfaces/formato';

interface ValueProps {
    titulo: string;
    formato: string;
    descricao: string;
}

interface Props {
    formatos: FormatoProps[];
    advanceClick: () => void;
    returnClick: () => void;
    numberPage: number;
}

const Step1 = ({ formatos, advanceClick, returnClick, numberPage }: Props) => {

    const enviando = (values: ValueProps) => {
        // pessoalControl(values);
        advanceClick();
    }

    return (
        <>
            <Formik
                initialValues={{
                    titulo: '',
                    formato: '',
                    descricao: '',
                }}
                onSubmit={enviando}
                validationSchema={schemaCadastroTemplate}>
                {({ isSubmitting }) => (
                    <Form>
                        <Box sx={{ textAlign: 'center', justifyContent: 'center', alignContent: 'center' }}>

                            <Field sx={field100} name='titulo' component={TextFieldFilled} label='Título' />
                            <Field sx={field100} name='formato' label='Formato' component={FieldSelectFilled}>
                                {formatos.map(formato => (
                                    <MenuItem key={formato.id} value={formato.id}>{formato.titulo}</MenuItem>
                                ))}
                            </Field>
                            <Field sx={field100} name='descricao' component={TextFieldFilled} label='Descrição' />

                            <FormNavigation submitting={isSubmitting} numberPage={numberPage} advanceClick={advanceClick} returnClick={returnClick} />
                        </Box>
                    </Form>
                )}
            </Formik>
        </>
    );
}

export default Step1;