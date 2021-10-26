import React from 'react'
import Grid from '@mui/material/Grid';
import UserAddressCard from './UserAddressCard';

export default function AddressContainer({ addresses }) {
    return (
        <Grid container direction="row"
            spacing={5}
            justifyContent="center"
            alignItems="center" >

            {addresses.map((address, index) => {
                return (<UserAddressCard address={address} index={index} />)
            })}


        </Grid>
    )
}
