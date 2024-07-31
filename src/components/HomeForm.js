// src/components/HomeForm.js
import React, { useState } from 'react';
import { Button, Container, Box } from '@mui/material';
import CustomTextField from './CustomTextField';

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
        console.log('Form Data:', formData);
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
