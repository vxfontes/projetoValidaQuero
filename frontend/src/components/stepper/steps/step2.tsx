import { Field, FieldArray, Form, Formik } from "formik";
import { FormNavigation } from "../formnavigate";
import { schemaTemplateCampos } from "../../../logic/utils/schemas/templateSchema";
import { Box, Button, Grid, IconButton, MenuItem, Typography } from "@mui/material";
import { AiFillDelete } from 'react-icons/ai'
import useTemplate from "../../../logic/core/functions/template";
import { PropsButtons } from "../../../logic/interfaces/stepper";
import { FieldSelectFilledCampos, TextFieldFilled } from "../../muiComponents/textFields";
import { fieldFormik } from "../../../styles/fieldStyle";
import { tipagem } from "../../../data/tipagem";
import { FieldCampo } from "../../muiComponents/fieldArrayError";
import { transformaNulos } from "../../../logic/utils/transformaBoolean";
import { CamposFirstProps } from "../../../logic/interfaces/template";

interface CamposArrayProps {
    campos: CamposFirstProps[]
}

const Step2 = ({ advanceClick, returnClick, numberPage }: PropsButtons) => {

    const { templateCampos } = useTemplate()

    const enviando = (values: CamposArrayProps) => {
        const newCampos = transformaNulos(values.campos)
        templateCampos(newCampos)
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
                            nulo: '',
                        },
                    ],
                }}
                onSubmit={enviando}
                validationSchema={schemaTemplateCampos}>
                {({ isSubmitting, values, errors }) => (
                    <Form>
                        <Box sx={{ textAlign: 'center', justifyContent: 'center', alignContent: 'center' }}>

                            <FieldArray name="campos">
                                {({ remove, push }) => (
                                    <Box>
                                        <Typography variant="body1" color="initial" align="left" ml={'10%'} my={1} mt={1}>Insira os campos do template</Typography>

                                        <Grid container direction='row' alignItems='center' gap={1}>
                                            {values.campos.length > 0 &&
                                                values.campos.map((_campo, index) => (
                                                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12} display='flex' alignItems='start' gap={1}>

                                                        <FieldCampo campo="nome" errors={errors} index={index}>
                                                            <Field sx={fieldFormik} name={`campos.${index}.nome`} component={TextFieldFilled} label={"Nome do campo"} />
                                                        </FieldCampo>

                                                        <FieldCampo errors={errors} campo="tipo" index={index}>
                                                            <Field sx={fieldFormik} name={`campos.${index}.tipo`} label='Tipo do campo' component={FieldSelectFilledCampos}>
                                                                {tipagem.map(tipo => <MenuItem key={tipo} value={tipo}>{tipo}</MenuItem>)}
                                                            </Field>
                                                        </FieldCampo>

                                                        <FieldCampo campo="nulo" errors={errors} index={index}>
                                                            <Field sx={fieldFormik} name={`campos.${index}.nulo`} component={FieldSelectFilledCampos} label="Nulidade">
                                                                <MenuItem key={1} value={'sim'}>Contém nulos</MenuItem>
                                                                <MenuItem key={2} value={'não'}>Não contém nulos</MenuItem>
                                                            </Field>
                                                        </FieldCampo>

                                                        <IconButton onClick={() => remove(index)}>
                                                            <AiFillDelete style={{ color: 'black' }} />
                                                        </IconButton>
                                                    </Grid>
                                                ))}
                                        </Grid>

                                        <Button variant="text" color="primary" onClick={() => push({ nome: '', tipo: '', nulo: '' })}>
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