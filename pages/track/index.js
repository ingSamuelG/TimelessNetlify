import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Fade from '@mui/material/Fade';
import { useGlobalContext } from '../../context';
import Grid from '@mui/material/Grid';
import styles from '../../styles/TrackPage.module.css'
import TrackSteper from '../../components/TrackSteper';
import OrderTrackForm from '../../components/OrderTrackForm';


export default function TrackPage() {
    const { setSubmenuClosed, traking, orders } = useGlobalContext()

    return (
        <div className={styles.container} onMouseOver={setSubmenuClosed}>
            <Grid container direction="row"
                spacing={10}
                justifyContent="center"
                alignItems="center" >

                <Grid item xs={12}>
                    <OrderTrackForm />
                </Grid>
                <Fade in={traking}>
                    <Grid item xs={12}>
                        <TrackSteper order={orders[0]} />
                    </Grid>
                </Fade>
            </Grid>
        </div>
    )
}


TrackPage.layout = 'main'