import * as React from 'react';
import { IconButton, InputAdornment, TextField, TextFieldProps } from "@mui/material";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

interface TextFieldMyProps {
    field: {
        name: string;
        value: string;
        onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
        onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
    };
    form: {
        touched: {
            [key: string]: boolean;
        };
        errors: {
            [key: string]: string;
        };
        values: {
            [key: string]: string;
        };
    };
}

export const TextFieldOutlined: React.FC<TextFieldMyProps & TextFieldProps> = ({
    field, // { name, value, onChange, onBlur }
    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    ...props
}) => (
    <div>
        <TextField {...field} {...props} variant='outlined' fullWidth
            error={touched[field.name] && Boolean(errors[field.name])}
            helperText={touched[field.name] && errors[field.name]} />
    </div>
);

export const TextFieldOutlinedSenha: React.FC<TextFieldMyProps & TextFieldProps> = ({
    field, // { name, value, onChange, onBlur }
    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    ...props
}) => {
    const [showPassword, setShowPassword] = React.useState(false);

    return (
        <div>
            <TextField {...field} {...props} variant='outlined' fullWidth
                type={showPassword ? 'text' : 'password'}
                error={touched[field.name] && Boolean(errors[field.name])}
                helperText={touched[field.name] && errors[field.name]}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="Toggle password visibility"
                                onClick={() => setShowPassword(!showPassword)}
                                edge="end"
                            >
                                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
        </div>
    );
}

export const TextFieldFilled: React.FC<TextFieldMyProps & TextFieldProps> = ({
    field, // { name, value, onChange, onBlur }
    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    ...props
}) => (
    <div>
        <TextField {...field} {...props} variant='filled' fullWidth
            error={touched[field.name] && Boolean(errors[field.name])}
            helperText={touched[field.name] && errors[field.name]} />
    </div>
);


export const FieldSelectOutlined: React.FC<TextFieldMyProps & TextFieldProps> = ({
    field, // { name, value, onChange, onBlur }
    children,
    form: { touched, errors, values }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    ...props
}) => (

    <div>
        <TextField select {...field} {...props} variant='outlined' defaultValue=""
            error={touched[field.name] && Boolean(errors[field.name])} helperText={touched[field.name] && errors[field.name]}
            onChange={(e) => values[field.name] = e.target.value}>
            {children}
        </TextField>
    </div>
);

export const FieldSelectFilled: React.FC<TextFieldMyProps & TextFieldProps> = ({
    field, // { name, value, onChange, onBlur }
    children,
    form: { touched, errors, values }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    ...props
}) => (

    <div>
        <TextField select {...field} {...props} variant='filled' defaultValue=""
            error={touched[field.name] && Boolean(errors[field.name])} helperText={touched[field.name] && errors[field.name]}
            onChange={(e) => values[field.name] = e.target.value}>
            {children}
        </TextField>
    </div>
);

export const FieldSelectFilledCampos: React.FC<TextFieldMyProps & TextFieldProps> = ({
    field, // { name, value, onChange, onBlur }
    children,
    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    ...props
}) => (

    <div>
        <TextField select {...field} {...props} variant='filled'
            value={field.value} error={touched[field.name] && Boolean(errors[field.name])}
            helperText={touched[field.name] && errors[field.name]} onChange={field.onChange}>
            {children}
        </TextField>
    </div>
);