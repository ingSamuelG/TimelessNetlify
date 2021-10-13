import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

const AddColorForm = ({ color }) => {

    const [name, setName] = useState(color ? color.name : "")
    const [hex, setHex] = useState(color ? color.hex : "#ffffff")


    return (
        <Box component="form" noValidate
            autoComplete="off">
            <Paper style={{ padding: '50px' }} >
                <Grid container
                    direction="row"
                    justifyContent="center"
                    alignItems="center" spacing={5}>
                    <Grid item xs={12}>
                        <Typography variant="h6">
                            Seleccione el color a añadir:
                        </Typography>
                    </Grid>

                    <Grid item lg={6} xs={12}>
                        <TextField
                            required
                            id="color-name"
                            label="Nombre del color"
                            placeholder="Negro ,  Blanco, Rojo"
                            fullWidth={true}
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value)
                            }}
                        />
                    </Grid>

                    <Grid item lg={6} xs={12}>
                        <Grid container
                            direction="row"
                            justifyContent="center"
                            alignItems="center" spacing={5}>

                            <Grid item xs={6}>
                                <label for="favcolor"><Typography variant="subtitle1">
                                    Seleccione hex/rgb:
                                </Typography></label>
                            </Grid>

                            <Grid item xs={6}>
                                <input style={{ width: '100%' }} type="color" id="favcolor" name="favcolor" value={hex} onChange={(e) => {
                                    setHex(e.target.value)
                                }} />
                            </Grid>
                        </Grid>
                    </Grid>


                    <Grid item lg={4} xs={12}>
                        <Grid container
                            direction="row"
                            justifyContent="center"
                            alignItems="center" spacing={5}>

                            <Grid item xs={6}>
                                <Button variant="contained">Guardar</Button>
                            </Grid>

                            <Grid item xs={6}>
                                <Button variant="outlined">Borrar</Button>
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
            </Paper>
        </Box>
    )
}

export default AddColorForm
