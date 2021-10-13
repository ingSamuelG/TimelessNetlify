import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography'


const AddressCard = ({ address, formVisible }) => {
    const { id, addressee, street, building, city, state, country, postal } = address

    const [addressFields, setAddressFields] = useState({ addresseeField: addressee, streetField: street, buildingField: building, cityField: city, stateField: state, countryField: country, postalField: postal })

    const handleInputsValues = (e) => {
        const name = e.target.name
        const value = e.target.value
        setAddressFields({ ...addressFields, [name]: value })
    }

    return (<div style={{ margin: 'auto', width: "95%", height: "95%", padding: '20px' }} >
        {formVisible ? (
            <FormControl fullWidth>
                <Grid container
                    direction="row"
                    justifyContent="center"
                    alignItems="center" >

                    <Grid item xs={12}>

                        <Grid container
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            spacing={2} >

                            <Grid item lg={12}>

                                <TextField
                                    required
                                    id="outlined-addressee"
                                    name="addresseeField"
                                    label="A nombre de"
                                    value={addressFields.addresseeField}
                                    onChange={handleInputsValues}
                                />

                            </Grid>


                            <Grid item lg={6} xs={12}>
                                <TextField
                                    required
                                    name="streetField"
                                    id="outlined-street"
                                    label="Calle"
                                    value={addressFields.streetField}
                                    onChange={handleInputsValues}
                                />

                            </Grid>


                            <Grid item lg={6} xs={12}>
                                <TextField
                                    required
                                    name="buildingField"
                                    id="outlined-street"
                                    label="Edificio/Casa"
                                    value={addressFields.buildingField}
                                    onChange={handleInputsValues}
                                />
                            </Grid>


                            <Grid item lg={6} xs={12}>
                                <TextField
                                    required
                                    name="cityField"
                                    id="outlined-street"
                                    label="ciudad"
                                    value={addressFields.cityField}
                                    onChange={handleInputsValues}
                                />
                            </Grid>

                            <Grid item lg={6} xs={12}>
                                <TextField
                                    required
                                    name="stateField"
                                    id="outlined-street"
                                    label="Estado/Providencia"
                                    value={addressFields.stateField}
                                    onChange={handleInputsValues}
                                />

                            </Grid>

                            <Grid item lg={6}>
                                <TextField
                                    required
                                    name="countryField"
                                    id="outlined-street"
                                    label="Pais"
                                    value={addressFields.countryField}
                                    onChange={handleInputsValues}
                                />

                            </Grid>

                            <Grid item lg={6}>
                                <TextField
                                    required
                                    name="postalField"
                                    id="outlined-street"
                                    label="Codigo Postal"
                                    value={addressFields.postalField}
                                    onChange={handleInputsValues}
                                />

                            </Grid>

                            <Grid item lg={12}>
                                <Button variant="contained">Gurdar</Button>
                            </Grid>

                        </Grid>

                    </Grid>

                </Grid>

            </FormControl>) : (<Grid container
                direction="row"
                justifyContent="center"
                alignItems="center" >

                <Grid item xs={12}>

                    <Grid container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2} >

                        <Grid item lg={12}>
                            <Typography variant="caption" display="block" gutterBottom>
                                {`${addressFields.addresseeField}`}
                            </Typography>
                        </Grid>


                        <Grid item lg={6} xs={12}>
                            <Typography variant="caption" display="block" gutterBottom>
                                {`${addressFields.streetField}`}
                            </Typography>
                        </Grid>


                        <Grid item lg={6} xs={12} style={{ textAlign: "left" }}>
                            <Typography variant="caption" display="block" gutterBottom>
                                {`${addressFields.buildingField}`}
                            </Typography>
                        </Grid>


                        <Grid item lg={6} xs={12}>
                            <Typography variant="caption" display="block" gutterBottom>
                                {`${addressFields.cityField}`}
                            </Typography>
                        </Grid>

                        <Grid item lg={6} xs={12}>
                            <Typography variant="caption" display="block" gutterBottom>
                                {`${addressFields.stateField}`}
                            </Typography>
                        </Grid>

                        <Grid item lg={6}>
                            <Typography variant="caption" display="block" gutterBottom>
                                {`${addressFields.countryField}`}
                            </Typography>
                        </Grid>

                        <Grid item lg={6}>
                            <Typography variant="caption" display="block" gutterBottom>
                                {`${addressFields.postalField}`}
                            </Typography>
                        </Grid>

                    </Grid>

                </Grid>

            </Grid>)}
    </div>)
}

export default AddressCard
