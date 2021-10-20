import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import { ccyFormat, subtotal } from './ProductMobileTableCart';
import Typography from '@mui/material/Typography';
import AddressCheckBox from './AddressCheckBox';
import { useGlobalContext } from '../context';
import { data } from '../PublicData';
import ShipmentTypeCheckBox from './ShipmentTypeCheckBox';
import Button from '@mui/material/Button';

export default function AddressSelection() {
    const store = require('store')
    const { myAddresses } = useGlobalContext()
    const cart = store.get('cart')
    const [envio, setEnvio] = useState(300)
    const [address, setAddress] = useState("")


    return (
        <Grid container direction="row"
            justifyContent="center"
            alignItems="center" spacing={2} style={{ border: "1px solid #dbd9d9" }}>

            <Grid item xs={12} style={{ textAlign: "center", background: "#f3f3f3" }}>
                <Typography variant="overline">
                    Total carrito
                </Typography>
            </Grid>

            <Grid item xs={6} style={{ textAlign: "center" }} >
                <Typography variant="overline">
                    SubTotal:
                </Typography>
            </Grid>

            <Grid item xs={6} style={{ textAlign: "center", borderLeft: "1px solid #dbd9d9" }}>
                <Typography variant="body1" >
                    {ccyFormat(subtotal(cart))}
                </Typography>
            </Grid>

            <Grid item xs={6} style={{ textAlign: "center" }} >
                <Typography variant="overline">
                    Envio:
                </Typography>
            </Grid>

            <Grid item xs={6} style={{ textAlign: "center", borderLeft: "1px solid #dbd9d9" }} >
                {/* # this should be dinamic  */}
                <ShipmentTypeCheckBox types={[{ label: "Tipo I", cost: 300 },
                { label: "Tipo II", cost: 400 },
                { label: "Tipo III", cost: 500 }]} fun={setEnvio} />
            </Grid>


            <Grid item xs={6} style={{ textAlign: "center" }} >
                {/* # this should be dinamic  */}
                <Typography variant="overline">
                    Dirección:
                </Typography>
            </Grid>

            <Grid item xs={6} style={{ textAlign: "center", borderLeft: "1px solid #dbd9d9" }} >
                {/* # this should be dinamic  */}
                <AddressCheckBox addresses={myAddresses} fun={setAddress} state={address} />
            </Grid>



            <Grid item xs={6} style={{ textAlign: "center" }} >
                <Typography variant="overline">
                    Total:
                </Typography>
            </Grid>

            <Grid item xs={6}>
                <Typography variant="h6" color="secondary" style={{ textAlign: "center" }}>
                    {ccyFormat(subtotal(cart) + parseInt(envio))}
                </Typography>
            </Grid>

            <Grid item xs={6} style={{ textAlign: "center", borderTop: "1px solid #dbd9d9", margin: 25 }} >
                <Button variant="contained" fullWidth>Finalizar Compra</Button>
            </Grid>

        </Grid >
    )

}

// this code is only for front end testing propuse we shuld get the product from a api or fetch

// export const getStaticProps = async (context) => {
//     const addresses = data.user.address
//     return {
//         props: {
//             addresses,
//         },
//     }
// }
