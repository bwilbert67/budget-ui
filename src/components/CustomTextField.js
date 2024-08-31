import React from 'react';
import { TextField } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const CustomTextField = ({ label, required = false, InputLabelProps = {}, ...props }) => {
const theme = useTheme();
const primaryColor = theme.palette.primary.main;
const secondaryColor = theme.palette.secondary.main;
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
                        borderColor: primaryColor, // Default border color
                    },
                    '&:hover fieldset': {
                        borderColor: primaryColor, // Border color on hover
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: primaryColor, // Border color when focused
                    },
                    '& input': {
                        fontFamily: 'var(--primary-font)', 
                    },
                },
                '& .MuiInputLabel-root': {
                    fontFamily: 'var(--primary-font)', 
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
