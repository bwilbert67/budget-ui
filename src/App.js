import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './views/HomePage';
import './index.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#4CAF50', 
        },
        secondary: {
            main: '#FFC107', 
        }
    },
    typography: {
        fontFamily: 'Roboto, sans-serif',
    },
});

const App = () => {
    return (
        // Wrap the app with ThemeProvider and pass the theme
        <ThemeProvider theme={theme}>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
};

export default App;
