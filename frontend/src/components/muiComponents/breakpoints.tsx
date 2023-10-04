import { useMediaQuery } from '@mui/material';
import theme from '../../theme';

export function useScreenSize() {
    const showTablet = useMediaQuery(theme.breakpoints.down('md'));
    const showFullHD = useMediaQuery(theme.breakpoints.up('xl'));

    return {
        showTablet, showFullHD
    };
}