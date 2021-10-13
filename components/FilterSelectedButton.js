import React from 'react'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ClearIcon from '@mui/icons-material/Clear';

export const FilterSelectedButton = ({ func, children }) => {
    return (
        <Grid item xs={12}>
            <Button variant="contained" endIcon={<ClearIcon />} size="small" fullWidth={true} onClick={func}>
                {children}
            </Button>
        </Grid>
    )
}
