import React from 'react';
import { Box, Typography, LinearProgress, Stack } from '@mui/material';
import '../index.css';

const BudgetLeftBar = ({ budgetData }) => {
    const monthlyBudget = budgetData.monthly_budget;
    const budgetLeft = budgetData.budget_left;
    const percentageLeft = (budgetLeft / monthlyBudget) * 100;

    const today = new Date();
    const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    const daysLeft = lastDayOfMonth.getDate() - today.getDate();

    return (
        <Stack 
            sx={{ 
                width: '100%', 
                padding: 3, 
                flexDirection: 'column',
                backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                borderRadius: 4,
                boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
                boxSizing: 'border-box',  // Ensure padding is included within width/height
            }} 
            gap={2}
        >
            <Typography 
                variant="h5" 
                textAlign="center" 
                sx={{ 
                    fontFamily: 'var(--primary-font)', 
                    fontWeight: 500,
                }}
            >
                Budget Left ({daysLeft} days remaining)
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{ width: '100%' }}>
                    <LinearProgress 
                        variant="determinate" 
                        value={percentageLeft} 
                        sx={{
                            height: 12,
                            borderRadius: 5,
                            backgroundColor: '#e0e0e0',
                            '& .MuiLinearProgress-bar': {
                                backgroundColor: percentageLeft < 20 ? '#f64545'  : 'var(--primary-color)',
                            },
                        }}
                    />
                </Box>
            </Box>
            <Typography 
                variant="h6" 
                sx={{
                    fontFamily: 'var(--primary-font)',  
                    color: percentageLeft < 20 ? '#f64545' : '#2661e9',
                    marginTop: 1,
                    textAlign: 'center',
                }}
            >
                ${budgetLeft}
            </Typography>
        </Stack>
    );
};

export default BudgetLeftBar;
