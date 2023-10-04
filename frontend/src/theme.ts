import { createTheme } from '@mui/material/styles';

declare module "@mui/material/styles/createPalette" {
    interface PaletteOptions {
        fundoPrincipal?: Palette['info'];
        fundoComponente?: Palette['info'];
        azulClaro?: Palette['info'];
    }

    interface Palette {
        fundoPrincipal?: Palette['info'];
        fundoComponente?: Palette['info'];
        azulClaro?: Palette['info'];
    }

}

const theme = createTheme({
    palette: {
        primary: {
            main: '#213555',
            contrastText: '#fff'
        },
        secondary: {
            main: '#EA5455',
            contrastText: '#fff'
        },

        // cores adicionais
        fundoPrincipal: {
            main: '#D8C4B6',
            light: '#D8C4B6',
            dark: '#D8C4B6',
            contrastText: '#000',
        },

        fundoComponente: {
            main: '#F5EFE7',
            light: '#F5EFE7',
            dark: '#e0dbd4',
            contrastText: '#000',
        },

        azulClaro: {
            main: '#4F709C',
            dark: '#3c5577',
            light: '#4F709C',
            contrastText: '#fff'
        }
    },
});

export default theme;