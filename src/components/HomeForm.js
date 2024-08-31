import React, { useState, useEffect } from 'react';
import { Button, Container, Box } from '@mui/material';
import CustomTextField from './CustomTextField';
import CustomAutocomplete from './CustomAutocomplete';
import { submitForm, getCategories, getBudgetLeftData } from '../services/FormService';
import BudgetLeftBar from './BudgetLeftBar';

const HomeForm = () => {
    const [formData, setFormData] = useState({
        price: '',
        item: '',
        category: '',
    });

    const [categories, setCategories] = useState([]);
    const [budgetData, setBudgetData] = useState({ monthly_budget: 0, budget_left: 0 });

    useEffect(() => {
        async function fetchCategories() {
            const fetchedCategories = await getCategories();
            const sortedCategories = fetchedCategories
                .map(category => category.name)
                .sort((a, b) => a.localeCompare(b)); // Sort alphabetically
            setCategories(sortedCategories);
        }

        async function fetchBudgetData() {
            const data = await getBudgetLeftData();
            setBudgetData(data);
        }

        fetchCategories();
        fetchBudgetData();
    }, []);
    

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleCategoryChange = (event, newValue) => {
        setFormData({
            ...formData,
            category: newValue || '',
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        submitForm(formData);
    };

    const handlePriceInput = (e) => {
        const value = e.target.value;
        if (!/^\d*\.?\d*$/.test(value)) {
            e.target.value = value.slice(0, -1);
        }
    };

    return (
        <Container maxWidth="sm">
            <BudgetLeftBar budgetData={budgetData} />
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 2,
                    marginTop: 8,
                }}
            >
                <CustomTextField 
                    label="Price" 
                    required 
                    name="price" 
                    value={formData.price} 
                    onChange={handleInputChange}
                    inputProps={{ inputMode: 'decimal', pattern: '[0-9]*[.]?[0-9]*' }}
                    onInput={handlePriceInput}
                    type="number"
                />
                <CustomTextField 
                    label="Item" 
                    required 
                    name="item" 
                    value={formData.item} 
                    onChange={handleInputChange}
                />
                <CustomAutocomplete
                    label="Category"
                    options={categories}
                    value={formData.category}
                    onChange={handleCategoryChange}
                    name="category"
                    required
                />
                <Button type="submit" variant="contained" color="secondary" sx={{fontFamily: 'var(--primary-font)'}}>
                    Submit
                </Button>
            </Box>
        </Container>
    );
};

export default HomeForm;
