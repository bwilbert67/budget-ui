import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './views/HomePage';
import './index.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { getToken } from './services/AuthService';

const theme = createTheme({
    palette: {
        primary: {
            main: '#4CAF50',
        },
        secondary: {
            main: '#FFC107',
        },
    },
    typography: {
        fontFamily: "Times New Roman, Garamond",
    },
});

const App = () => {
    // Placeholder for the token, remove this line when implementing real login
    const placeholderToken = "fake-token"; // This line is temporary

    // Use the placeholder token or the actual token from localStorage
    const token = placeholderToken || localStorage.getItem('jwt');

    const [isAuthenticated, setIsAuthenticated] = useState(!!token);

    useEffect(() => {
        // For actual login, remove the use of the placeholderToken
        if (token) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
    }, [token]);

    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Routes>
                    {isAuthenticated ? (
                        <Route path="/" element={<HomePage />} />
                    ) : (
                        <Route path="/" element={<h1>Please put the login page here </h1>} />
                    )}
                </Routes>
            </Router>
        </ThemeProvider>
    );
};

export default App;
