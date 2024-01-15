import { ChildrenProps } from "../../logic/interfaces/children";
import GridContainers from "../muiComponents/gridContainers";
import theme from '../../theme';
import { Grid, styled } from '@mui/material';

export const FundoBackground = styled(Grid)({
    height: '100%',
    minHeight: '100vh',
    width: '100%',
    backgroundColor: theme.palette.fundoPrincipal?.main,
    border: 'none',
});

const FundoPadraoGrid = ({ children }: ChildrenProps) => {
    return (
        <GridContainers align="center" direction="column" sx={{ bgcolor: theme.palette.fundoPrincipal?.main }}>
            {children}
        </GridContainers>
    );
}

export default FundoPadraoGrid;