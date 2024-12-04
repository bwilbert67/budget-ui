import React from 'react';
import { Autocomplete, Popper, styled } from '@mui/material';
import CustomTextField from './CustomTextField';

// Custom Popper to control dropdown behavior and styling
const StyledPopper = styled(Popper)(({ theme }) => ({
    border: `2px solid ${theme.palette.primary.main}`, 
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[1],
    width: '200px', // Smaller width initially
    marginTop: theme.spacing(1),
    '& .MuiAutocomplete-listbox': {
        padding: 0,
        maxHeight: '200px', // Control dropdown max height
        overflowY: 'auto',
        '& li': {
            padding: theme.spacing(1),
        },
    },
    '& .MuiAutocomplete-noOptions': {
        padding: theme.spacing(1),
    },
}));

const CustomAutocomplete = ({ label, options, value, onChange, ...props }) => {
    return (
        <Autocomplete
            options={options}
            value={value}
            onChange={onChange}
            freeSolo
            fullWidth
            PopperComponent={StyledPopper} // Use the custom Popper
            disablePortal // Ensure dropdown renders downward
            renderInput={(params) => (
                <CustomTextField 
                    {...params}
                    label={label}
                    {...props}
                />
            )}
        />
    );
};

export default CustomAutocomplete;
