import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import Select from '@mui/material/Select';
import { useGlobalContext } from '../context';

const AddSubCatForm = ({ subcategory }) => {
    const { categories } = useGlobalContext()
    const [name, setName] = useState(subcategory ? subcategory.name : "")
    const [catID, setCatID] = useState(subcategory ? subcategory.category_id : "")




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
                            Ingrese la Sub categoria a añadir:
                        </Typography>
                    </Grid>

                    <Grid item lg={6} xs={12}>
                        <TextField
                            required
                            id="subCat-name"
                            label="Sub-Categories"
                            placeholder='Introduzca una nueva categoria como  "Juguetes"'
                            fullWidth={true}
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value)
                            }}
                        />
                    </Grid>

                    <Grid item lg={6} xs={12}>

                        <InputLabel id="sub-category-label">Categoria</InputLabel>
                        <Select
                            labelId="sub-category-label"
                            id="demo-simple-select-helper"
                            // value={age}
                            defaultValue='Ropa'
                            label="Categoria"
                            // onChange={handleChange}
                            fullWidth={true}
                            value={catID}
                            onChange={(e) => {
                                setCatID(e.target.value)
                            }}
                        >

                            {categories.map((category) => {
                                return <MenuItem key={category.id} value={category.id}>
                                    {category.name}
                                </MenuItem>
                            })}

                        </Select>
                        <FormHelperText>Selecciona la categoría padre  a la que la subcategoria pertenece</FormHelperText>

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

export default AddSubCatForm
