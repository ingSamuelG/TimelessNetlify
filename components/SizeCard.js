import React from 'react'
import Link from 'next/link'
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
// import styles from '../styles/ColorCard.module.css'



const SizeCard = ({ entries }) => {

    return (
        <Grid container spacing={2} direction="row"
            justifyContent="center"
            alignItems="center">
            <Typography variant="caption" display="block" gutterBottom>
                {entries.length > 1 ? 'Sizes:' : 'Size:'}
            </Typography>

            {entries.map((entry) => {
                return <Grid item key={`${entry.product_id}${entry.color}${entry.size}`}>
                    <Typography variant="caption" display="block" gutterBottom>
                        | {entry.size} |
                    </Typography>
                </Grid>

            })}


        </Grid>
    )
}

export default SizeCard
