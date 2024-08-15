import React from 'react';
import { Box, Typography, LinearProgress, Stack} from '@mui/material';
import '../index.css'
const BudgetLeftBar = ({ budgetData }) => {
    const monthlyBudget = budgetData.monthly_budget;
    const budgetLeft = budgetData.budget_left;
    const percentageLeft = (budgetLeft / monthlyBudget) * 100;

    // Calculate days left in the current month
    const today = new Date();
    const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    const daysLeft = lastDayOfMonth.getDate() - today.getDate();

    return (
        <Stack sx={{ width: '100%', marginBottom: 2, flexDirection: 'column'}} gap={2}>
            <Typography variant="h4" color="textSecondary" textAlign={'center'} sx={{fontFamily: 'var(--primary-font)'}}>
            Budget Left ({daysLeft} days remaining)
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{ width: '100%', mr: 1 }}>
                    <LinearProgress 
                        variant="determinate" 
                        value={percentageLeft} 
                        sx={{
                            height: 20,
                            borderRadius: 5,
                            backgroundColor: 'white',
                            '& .MuiLinearProgress-bar': {
                                backgroundColor: percentageLeft < 20 ? '#f64545'  : '#2661e9',
                            },
                        }}
                    />
                </Box>
            </Box>
            <Typography 
                variant="h4" 
                sx={{
                    fontFamily: 'var(--primary-font)',  
                    color: percentageLeft < 20 ? '#f64545' : '#2661e9',
                    marginTop: 1,
                    textAlign: 'center'
                }}
            >
                ${budgetLeft}
            </Typography>
        </Stack>
    );
};

export default BudgetLeftBar;
