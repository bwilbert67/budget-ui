// src/components/HomeForm.js
import React, { useState } from 'react';
import { Button, Container, Box } from '@mui/material';
import CustomTextField from './CustomTextField';
import { submitForm } from '../services/FormService';

const HomeForm = () => {
    // Initialize state for form data
    const [formData, setFormData] = useState({
        price: '',
        item: '',
        category: '',
    });

    // Handle input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Print the form data
        submitForm(formData);
    };

    // Function to handle price input validation
const handlePriceInput = (e) => {
    const value = e.target.value;
    if (!/^\d*\.?\d*$/.test(value)) {
        e.target.value = value.slice(0, -1);
    }
};

    return (
        <Container maxWidth="sm">
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
                <CustomTextField 
                    label="Category" 
                    required 
                    name="category" 
                    value={formData.category} 
                    onChange={handleInputChange}
                />
                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </Box>
        </Container>
    );
};

export default HomeForm;
