import React, { useEffect } from 'react'
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import { useGlobalContext } from '../context';

const OrderGeneralCard = ({ date, email, state, dateShip, shipAddress, address, user_name, user_phone }) => {
    const { newOrderState, handlenewOrderState } = useGlobalContext()

    useEffect(() => {
        handlenewOrderState(state)
    }, [state])


    const handleChangeOrder = (event) => {
        handlenewOrderState(event.target.value)

    }

    return (
        <div style={{ margin: 'auto', width: "95%", height: "95%", padding: '20px' }}>
            <Grid container
                direction="row"
                justifyContent="center"
                alignItems="center" >

                {/* <Grid item xs={12}>
                    <Typography variant="overline" display="block" gutterBottom>
                        General
                    </Typography>
                </Grid> */}

                <Grid item xs={12}>

                    <Grid container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2} >

                        <Grid item xs={6}>
                            <Typography variant="caption" display="block" gutterBottom >
                                Fecha de creación:
                            </Typography>
                        </Grid>

                        <Grid item xs={6}>
                            <Typography variant="caption" display="block" gutterBottom>
                                {`${date}`}
                            </Typography>
                        </Grid>

                        <Grid item xs={6}>
                            <Typography variant="caption" display="block" gutterBottom>
                                Fecha de envío:
                            </Typography>
                        </Grid>

                        <Grid item xs={6}>
                            <Typography variant="caption" display="block" gutterBottom>
                                {`${dateShip}`}
                            </Typography>
                        </Grid>

                        <Grid item xs={6}>
                            <Typography variant="caption" display="block" gutterBottom>
                                Estado:
                            </Typography>
                        </Grid>



                        <Grid item xs={6}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Estado</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={newOrderState}
                                    label="Estado"
                                    onChange={handleChangeOrder}
                                >
                                    <MenuItem value={0}>Orden recibida</MenuItem>
                                    <MenuItem value={1}>Pagadas</MenuItem>
                                    <MenuItem value={2}>Empacada y lista para despacho</MenuItem>
                                    <MenuItem value={3}>Enviada</MenuItem>
                                    <MenuItem value={4}>Completada</MenuItem>
                                    <MenuItem value={5}>Rembolsada</MenuItem>
                                    <MenuItem value={6}>Cancelada</MenuItem>
                                </Select>
                            </FormControl>

                        </Grid>

                        <Grid item lg={4}>
                            <Typography variant="caption" display="block" gutterBottom>
                                Nombre/Email:
                            </Typography>
                        </Grid>

                        <Grid item lg={8}>
                            <Typography variant="caption" display="block" gutterBottom>
                                {`${user_name} => ${email}`}
                            </Typography>
                        </Grid>

                        <Grid item lg={4}>
                            <Typography variant="caption" display="block" gutterBottom>
                                Phone:
                            </Typography>
                        </Grid>

                        <Grid item lg={8}>
                            <Typography variant="caption" display="block" gutterBottom>
                                {`${user_phone}`}
                            </Typography>
                        </Grid>

                    </Grid>

                </Grid>
            </Grid>
        </div>
    )
}

export default OrderGeneralCard
