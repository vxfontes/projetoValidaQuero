import { Box, Typography } from "@mui/material";
import folder from '../../assets/icon/iconPaste.svg';
import valida from '../../assets/validaQuero.png';
import theme from "../../theme";

interface Props {
    width?: string
    height?: string
}

export const IconFolderValida = () => (
    <Box display='flex' alignItems='center' gap={1}>
        <img src={folder} alt="ValidaQuero" />
        <Typography fontFamily={['Inter', 'sans-serif'].join(',')} variant="h4" color={theme.palette.primary.main}><b>Valida</b>Quero</Typography>
    </Box>
)

export const IconValida = ({ width, height }: Props) => (
    <img src={valida} alt="ValidaQuero" width={width} height={height} />
)