import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router } from 'react-router-dom';
import theme from "./theme";
import Rotas from "./routes";
import { UserProvider } from "./logic/core/hooks/userContext";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />

            <Router>
                <UserProvider>
                    <Rotas />
                </UserProvider>
            </Router>
        </ThemeProvider>
    )
}

export default App