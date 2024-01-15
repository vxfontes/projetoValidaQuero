import theme from '../../theme';
import { Grid, styled } from '@mui/material';

export const FundoAzulPrimary = styled(Grid)({
    height: '100%',
    minHeight: '100vh',
    width: '100%',
    backgroundColor: theme.palette.primary.main,
    border: 'none',
});

export const FundoComponente = styled(Grid)({
    height: '100%',
    minHeight: '100vh',
    width: '100%',
    backgroundColor: theme.palette.fundoComponente?.main,
    border: 'none',
});