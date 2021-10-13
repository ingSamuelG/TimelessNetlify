import React from 'react'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import { useGlobalContext } from '../context';

const OrderTrackForm = () => {
    const { toggleTracking } = useGlobalContext()
    return (
        <form action="">
            <Grid container direction="row"
                spacing={5}
                justifyContent="center"
                alignItems="center" >

                <Grid item lg={5} xs={12}>
                    <TextField label="Email" fullWidth />
                </Grid>
                <Grid item lg={5} xs={12}>
                    <TextField label="Numero de orden" fullWidth />
                </Grid>

                <Grid item lg={2} xs={12}>
                    <Button
                        variant="contained"
                        color="primary"
                        endIcon={<SendIcon />}
                        fullWidth
                        onClick={toggleTracking}
                    >
                        Chequear estatus
                    </Button>
                </Grid>
            </Grid>
        </form >
    )
}

export default OrderTrackForm
