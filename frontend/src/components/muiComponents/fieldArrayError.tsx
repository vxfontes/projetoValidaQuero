import { Box, Typography, styled } from "@mui/material";
import { ChildrenProps } from "../../logic/interfaces/children";
import { ErrorMessage } from "formik";

export const Errormsg = styled(Typography)({
    color: '#d42c2c'
});

interface FieldCampoProps extends ChildrenProps {
    errors: any;
    index: number;
    campo: string;
}

export function FieldCampo({ errors, index, campo, children }: FieldCampoProps) {
    return (
        <Box sx={{ display: 'block', width: '100%' }}>
            {children}
            {errors.campos !== undefined && <ErrorMessage name={`campos.${index}.${campo}`} component={Errormsg} />}
        </Box>
    )
}