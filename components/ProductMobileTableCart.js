import React from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ProductRowMobile from './ProductRowMobile';
import Divider from '@mui/material/Divider';
import styles from '../styles/ProductOrderDetails.module.css'
import Typography from '@mui/material/Typography';

export function subtotal(items) {
    return items.map(({ price, qty }) => price * qty).reduce((sum, i) => sum + i, 0);
}

export function subtotalOfItemes(items) {
    return items.map(({ qty }) => qty).reduce((sum, i) => sum + i, 0);
}

export function ccyFormat(num) {
    return `$ ${num.toFixed(2)}`;
}

const ProductMobileTableCart = () => {
    const store = require('store')
    const cart = store.get('cart')

    const TAX_RATE = 0.07;
    const subtotalAmount = subtotal(cart)
    const totalQty = subtotalOfItemes(cart)
    const taxAmount = TAX_RATE * subtotalAmount



    return (
        <Paper elevation={1} >
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
                style={{ padding: '50px', textAlign: "center" }}>

                <Grid item xs={3} style={{ textAlign: "center" }}>
                    <Typography variant="button" display="block" gutterBottom>
                        Articulo:
                    </Typography>
                </Grid>

                <Grid item xs={3} style={{ textAlign: "center" }}>
                    <Typography variant="button" display="block" gutterBottom>
                        Costo:
                    </Typography>
                </Grid>

                <Grid item xs={3} style={{ textAlign: "center" }}>
                    <Typography variant="button" display="block" gutterBottom>
                        Cantidad:
                    </Typography>
                </Grid>

                <Grid item xs={3} style={{ textAlign: "center" }}>
                    <Typography variant="button" display="block" gutterBottom>
                        Total:
                    </Typography>
                </Grid>

                {cart.map((product) => {
                    return (
                        <ProductRowMobile key={product.entry_id} product={product} />
                    )
                })}

                {/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
            </Grid>
        </Paper>
    )
}

export default ProductMobileTableCart
