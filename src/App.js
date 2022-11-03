import React from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';
import { lightTheme } from "theme";
import { AppRouter } from "routes";

function App() {
    return (
        <ThemeProvider theme={lightTheme}>
            <CssBaseline />
            <AppRouter />
        </ThemeProvider>
    );
}

export default App;
