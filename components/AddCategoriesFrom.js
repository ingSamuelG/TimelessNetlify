import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const AddCategoriesFrom = ({ category }) => {

    const [catName, setCatName] = useState(category ? category.name : "")


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
                            Ingrese la Categoria a añadir:
                        </Typography>
                    </Grid>

                    <Grid item lg={12} xs={12}>
                        <TextField
                            required
                            id="cate-name"
                            label="Categorias"
                            placeholder='Introduzca una nueva categoria como  "Juguetes"'
                            fullWidth={true}
                            value={catName}
                            onChange={(e) => {
                                setCatName(e.target.value)
                            }}
                        />
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

export default AddCategoriesFrom
