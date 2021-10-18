import React from 'react';
import styles from '../../styles/Add.module.css'
import ProductMobileTableCart from '../../components/ProductMobileTableCart';
import { useGlobalContext } from '../../context';
import Typography from '@mui/material/Typography';
import CartTable from '../../components/CartTable';
import AddressSelection from '../../components/AddressSelection';
import Grid from '@mui/material/Grid';

export default function Index() {
    const store = require('store')
    const { setSubmenuClosed } = useGlobalContext()

    return (
        <div className={styles.container} onMouseOver={setSubmenuClosed}>

            <div className={styles.main}>

                <Grid container direction='row' spacing={5} justifyContent="center"
                    alignItems="center">

                    <Grid item xs={12} className={styles["desktop-cart"]}>
                        <CartTable />
                    </Grid>

                    <Grid item xs={12} className={styles["mobile-cart"]}>
                        <ProductMobileTableCart />
                    </Grid>

                    <Grid item xs={6}>
                        <Typography variant="overline">
                            vacio
                        </Typography>
                    </Grid>

                    <Grid item xs={6}>
                        <AddressSelection />
                    </Grid>


                </Grid>
            </div>
        </div>
    )
}

Index.layout = 'main'
