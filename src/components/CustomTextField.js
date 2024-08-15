import React from 'react';
import { TextField } from '@mui/material';

const CustomTextField = ({ label, required = false, InputLabelProps = {}, ...props }) => {
    return (
        <TextField
            label={label}
            variant="outlined"
            fullWidth
            required={required}
            sx={{
                backgroundColor: 'white',
                '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                        borderColor: 'black', // Default border color
                    },
                    '&:hover fieldset': {
                        borderColor: 'black', // Border color on hover
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: 'black', // Border color when focused
                    },
                    '& input': {
                        fontFamily: 'var(--primary-font)', // Apply Rubik font to input text
                    },
                },
                '& .MuiInputLabel-root': {
                    fontFamily: 'var(--primary-font)', // Apply Rubik font to label
                },
            }}
            InputLabelProps={{
                shrink: true,
                style: { color: 'gray', fontFamily: 'var(--primary-font)'},
                required: false, // Prevent MUI from adding asterisk
                ...InputLabelProps, // Merge with any provided InputLabelProps
            }}
            {...props}
        />
    );
};

export default CustomTextField;
