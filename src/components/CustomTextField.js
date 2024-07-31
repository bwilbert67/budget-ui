import React from 'react';
import { TextField } from '@mui/material';

const CustomTextField = ({ label, required = false, ...props }) => {
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
                },
            }}
            InputLabelProps={{
                shrink: true,
                style: { color: 'gray' },
                required: false, // Prevent MUI from adding asterisk
            }}
            {...props}
        />
    );
};

export default CustomTextField;
