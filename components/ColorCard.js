import React from 'react'
import Link from 'next/link'
import Grid from '@mui/material/Grid';
import styles from '../styles/ColorCard.module.css'



const ColorsCard = ({ entries }) => {

    return (
        <Grid container spacing={2} direction="row"
            justifyContent="center"
            alignItems="center">
            {entries.map((entry) => {
                return <Grid item xs={3} key={`${entry.product_id}${entry.color}${entry.size}`}>
                    <div className={styles.rounded} style={{ backgroundColor: `${entry.color}` }}>

                    </div>
                </Grid>
            })}


        </Grid>
    )
}

export default ColorsCard
