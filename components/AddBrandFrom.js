import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Image from 'next/image'
import Tooltip from '@mui/material/Tooltip';


import Grid from '@mui/material/Grid';

const AddBrandFrom = ({ brand }) => {
    const [FBrand, setFbrand] = useState(brand ? brand.id : "")
    const [img, setImg] = useState(brand ? brand.img_url : "")

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
                            Ingrese la marca a añadir:
                        </Typography>
                    </Grid>

                    <Grid item lg={4} xs={12}>
                        <TextField
                            required
                            id="brand-name"
                            label="Marca"
                            placeholder='Introduzca la marca: "Chanel" , "Valenciaga"'
                            fullWidth={true}
                            value={FBrand}
                            onChange={(e) => {
                                setFbrand(e.target.value)
                            }}
                        />
                    </Grid>

                    <Grid item lg={4} xs={12} >
                        <Grid container
                            direction="column"
                            justifyContent="center"
                            alignItems="center">
                            <Image
                                alt={`${img}`}
                                src={`/logos/${img}`}
                                width={60}
                                height={30}
                                quality={100}
                            />
                        </Grid>
                    </Grid>

                    <Grid item lg={4} xs={12} >
                        <Tooltip title="Suba el logo de la marca" placement="top-start">
                            <label htmlFor="icon-button-file">
                                <input style={{ display: 'none' }} accept="image/*" id="icon-button-file" type="file" />
                                <IconButton color="primary" aria-label="upload picture" component="span">
                                    <PhotoCamera />
                                </IconButton>
                            </label>
                        </ Tooltip>
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

export default AddBrandFrom
