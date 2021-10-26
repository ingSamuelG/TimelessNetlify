import React from 'react'
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import styles from '../styles/NoData.module.css'
import Typography from '@mui/material/Typography';

export default function NoData({ message }) {
    return (
        <div className={styles.main}>
            <Grid container
                direction="column"
                alignItems="center"
                justifyContent="center"
                spacing={10}
            >
                <Grid item >
                    <Typography variant="h5">
                        {message}
                    </Typography>
                </Grid>

                <Grid item >
                    <Image src="/logos/undraw_No_data_re_kwbl.svg" alt={message} height={220} width={220} />
                </Grid>
            </Grid>
        </div>
    )
}
