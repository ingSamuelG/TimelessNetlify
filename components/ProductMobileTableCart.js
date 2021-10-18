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
                style={{ padding: '50px' }}>

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
                    return (<Grid key={product.entry_id} item xs={12}>
                        <ProductRowMobile product={product} />
                    </Grid>)
                })}

                <Grid item xs={3} >
                </Grid>

                <Grid item xs={3} style={{ textAlign: "right" }}  >
                    <Typography variant="overline" display="block" gutterBottom>
                        Subtotal:
                    </Typography>
                </Grid>

                <Grid item xs={3} style={{ textAlign: "center" }}>
                    {`${totalQty} items `}
                </Grid>

                <Grid item xs={3} style={{ textAlign: "center" }}>
                    <Typography variant="caption" display="block" gutterBottom>
                        {ccyFormat(subtotalAmount)}
                    </Typography>
                </Grid>

                <Grid item xs={3} >

                </Grid>

                <Grid item xs={3} style={{ textAlign: "right" }}>
                    <Typography variant="overline" display="block" gutterBottom>
                        Impuesto:
                    </Typography>
                </Grid>

                <Grid item xs={3} style={{ textAlign: "center" }} >
                    7%
                </Grid>

                <Grid item xs={3} style={{ textAlign: "center" }}>
                    <Typography variant="caption" display="block" gutterBottom>
                        {`${ccyFormat(taxAmount)}`}
                    </Typography>
                </Grid>

                <Grid item xs={3} >
                </Grid>

                <Grid item xs={9} >
                    <Divider />
                </Grid>

                <Grid item xs={3} >

                </Grid>

                <Grid item xs={3} style={{ textAlign: "right" }}>

                </Grid>

                <Grid item xs={3} style={{ textAlign: "right" }} >
                    <Typography variant="overline" display="block" gutterBottom>
                        Total:
                    </Typography>
                </Grid>

                <Grid item xs={3} style={{ textAlign: "center" }}>
                    <Typography variant="caption" display="block" gutterBottom>
                        {`${ccyFormat((taxAmount + subtotalAmount))}`}
                    </Typography>
                </Grid>



            </Grid>
        </Paper>
    )
}

export default ProductMobileTableCart
