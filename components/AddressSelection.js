import React from 'react'
import Grid from '@mui/material/Grid';
import { ccyFormat, subtotal } from './ProductMobileTableCart';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function AddressSelection() {
    const store = require('store')
    const cart = store.get('cart')

    return (
        <Grid container direction="row"
            justifyContent="center"
            alignItems="center" spacing={2} style={{ border: "1px solid #dbd9d9" }}>

            <Grid item xs={12} style={{ textAlign: "center", background: "#f3f3f3" }}>
                <Typography variant="overline">
                    Total carrito
                </Typography>
            </Grid>

            <Grid item xs={6} style={{ textAlign: "center", borderRight: "1px solid #dbd9d9" }} >
                <Typography variant="overline">
                    Total:
                </Typography>
            </Grid>

            <Grid item xs={6}>
                <Typography variant="h6" color="secondary" style={{ textAlign: "center" }}>
                    {ccyFormat(subtotal(cart))}
                </Typography>
            </Grid>

            <Grid item xs={6} style={{ textAlign: "center", borderRight: "1px solid #dbd9d9" }} >
                <Typography variant="overline">
                    Envio:
                </Typography>
            </Grid>

            <Grid item xs={6} style={{ textAlign: "center", borderRight: "1px solid #dbd9d9" }} >
                <Typography variant="overline">
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Tipo de envio</FormLabel>
                        <RadioGroup
                            aria-label="Tipo de envio"
                            defaultValue="Tipo 1"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="Tipo 1" control={<Radio />} label="Tipo 1" />
                            <FormControlLabel value="Tipo 2" control={<Radio />} label="Tipo 2" />
                            <FormControlLabel value="Tipo 3" control={<Radio />} label="Tipo 3" />
                        </RadioGroup>
                    </FormControl>
                </Typography>
            </Grid>


        </Grid>
    )
}
