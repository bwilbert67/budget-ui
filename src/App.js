import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './views/HomePage';
import BreakdownPage from './views/BreakdownPage';  
import EditBudgetPage from './views/EditBudgetPage';  
import './index.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Menu from './components/Menu'; 

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

    // REMOVE. Hardcoding a token for now
    localStorage.setItem('jwt', 'fake-token');

    // Using local storage for token. Will be cached sometimes, so they will not 
    // have to login. Othertimes will be null
    const [token, setToken] = useState(localStorage.getItem('jwt'));
    const [isAuthenticated, setIsAuthenticated] = useState(!!token);


    useEffect(() => {
        // Whenever token changes, update isAuthenticated
        setIsAuthenticated(!!token);
    }, [token]);

    // Define the routes
    const routes = [
        { path: '/', name: 'Home' },
        { path: '/breakdown', name: 'Breakdown' },  // Add Breakdown route
        { path: '/edit-budget', name: 'Edit Budget' },  // Add Edit Budget route
    ];

    return (
        <ThemeProvider theme={theme}>
            <Router>
                <div>
                <Menu routes={routes} setToken={setToken} /> 
                    <Routes>
                        {/* If they have their token, allow them to enter page */}
                        {isAuthenticated ? (
                            <>
                                <Route path="/" element={<HomePage />} />
                                <Route path="/breakdown" element={<BreakdownPage />} /> 
                                <Route path="/edit-budget" element={<EditBudgetPage />} /> 
                            </>
                        ) : (
                            // If they don't have token, make them login
                            <Route path="/" element={<h1>Please put the login page here</h1>} />
                        )}
                    </Routes>
                </div>
            </Router>
        </ThemeProvider>
    );
};

export default App;
