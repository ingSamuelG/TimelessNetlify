import React from 'react';
import styles from '../../styles/Add.module.css'
import Grid from '@mui/material/Grid';

const index = () => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <Grid container direction='row' spacing={2} justifyContent="center"
                    alignItems="center">

                    <Grid item xs={12}>
                        <h2>TABLA CARRITO</h2>
                    </Grid>

                    <Grid item xs={6}>
                        <h2>vacio</h2>
                    </Grid>

                    <Grid item xs={6}>
                        <h2>seleccion de envio</h2>
                    </Grid>


                </Grid>
            </div>
        </div>
    )
}

index.layout = 'main'

export default index
