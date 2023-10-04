
import { Theme } from "@mui/material/styles";
import { SxProps } from "@mui/material/styles";
import { ChildrenProps } from "../../logic/interfaces/children";
import { Grid } from "@mui/material";

interface GridContProps extends ChildrenProps {
    align: 'center' | 'start' | 'end',
    direction: 'row' | 'column',
    sx?: SxProps<Theme> | undefined,
    spacing?: number | 1
    justify?: string
}

const GridContainers = ({ children, align, direction, sx, spacing, justify }: GridContProps) => {
    return (
        <Grid container sx={sx} direction={direction} justifyContent={justify} alignItems={align} alignContent="center" wrap="wrap" spacing={spacing}>
            {children}
        </Grid>
    );
}

export default GridContainers;