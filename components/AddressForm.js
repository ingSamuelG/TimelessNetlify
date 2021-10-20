import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useGlobalContext } from '../context';
import CloseIcon from '@mui/icons-material/Close';
import styles from "../styles/AddressForm.module.css"
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';

export default function AddressForm() {
    const store = require('store')
    const cart = store.get('cart')
    const [toggle, setToggle] = useState(false)
    const { setMyAddresses, SetMyDefaultAddress } = useGlobalContext()
    const [address, setAddress] = useState(
        {
            id: "",
            addressee: "",
            street: "",
            building: "",
            city: "",
            state: "",
            country: "",
            postal: 0
        })

    return (<>
        <Grid container direction="column"
            justifyContent="center"
            spacing={5}
        >
            <Grid item xs={12}>
                <Grid container direction="row"
                    alignItems="center"
                    spacing={2}
                >

                    <Grid item xs={6}>
                        <Button variant="contained" onClick={() => {
                            if (toggle) {
                                alert("Guarde la dirección")
                                setToggle(!toggle)
                            } else {
                                setToggle(!toggle)
                            }

                        }}>{toggle ? "Guardado permanente:" : "Añadir nueva dirección:"}</Button>
                    </Grid>

                    {toggle ? (
                        <Grid item xs={6}>
                            <Button variant="outlined" onClick={() => {
                                if (toggle) {
                                    SetMyDefaultAddress(`${address.addressee}-${address.building}-${address.city}`)

                                    setMyAddresses({ ...address, id: `${address.addressee}-${address.building}-${address.city}` })

                                    setToggle(!toggle)
                                } else {
                                    setToggle(!toggle)
                                }

                            }}>Usar solo esta vez</Button>
                        </Grid>) : null}

                </Grid>

            </Grid>
            <Collapse in={toggle}>
                <Grid item xs={12}> <Box
                    component="form"
                    autoComplete="off"
                >
                    <Grid container direction="row"
                        // justifyContent="center"
                        alignItems="center"
                        spacing={2}
                        style={{ border: "1px solid #dbd9d9", padding: "20px" }}
                    >
                        <Grid item xs={12} style={{ textAlign: "right" }}>
                            <IconButton aria-label="Close form" onClick={() => {
                                setToggle(false)
                            }}>
                                <CloseIcon />
                            </IconButton>
                        </Grid>
                        <Grid item xs={4}>
                            <TextField id="outlined-addressee"
                                label="A nombre de:"
                                variant="outlined"
                                fullWidth
                                required
                                value={address.addressee}
                                onChange={(e) => {
                                    setAddress({ ...address, addressee: e.target.value })
                                }}
                            />
                        </Grid>
                        <Grid item xs={8}>
                            <TextField
                                id="outlined-street"
                                label="Calle:"
                                variant="outlined"
                                fullWidth
                                required
                                value={address.street}
                                onChange={(e) => {
                                    setAddress({ ...address, street: e.target.value })
                                }}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                id="outlined-building"
                                label="Edificio/Casa/Local:"
                                variant="outlined"
                                fullWidth
                                required
                                value={address.building}
                                onChange={(e) => {
                                    setAddress({ ...address, building: e.target.value })
                                }}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                id="outlined-city"
                                label="Pais:"
                                variant="outlined"
                                fullWidth
                                required
                                value={address.country}
                                onChange={(e) => {
                                    setAddress({ ...address, country: e.target.value })
                                }}
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextField
                                id="outlined-city"
                                label="Ciudad:"
                                variant="outlined"
                                fullWidth
                                required
                                value={address.city}
                                onChange={(e) => {
                                    setAddress({ ...address, city: e.target.value })
                                }}
                            />

                        </Grid>

                        <Grid item xs={6}>
                            <TextField
                                id="outlined-state"
                                label="Estado:"
                                variant="outlined"
                                fullWidth
                                required
                                value={address.state}
                                onChange={(e) => {
                                    setAddress({ ...address, state: e.target.value })
                                }}
                            />
                        </Grid>

                        <Grid item xs={4}>
                            <TextField
                                id="outlined-ZIP"
                                label="Codigo postal:"
                                variant="outlined"
                                fullWidth
                                required
                                value={address.postal}
                                onChange={(e) => {
                                    setAddress({ ...address, postal: e.target.value })
                                }}
                            />
                        </Grid>
                    </Grid>
                </Box>
                </Grid></Collapse>

            {!toggle ?
                <Grid item xs={12}>
                    <div className={styles.desktop}></div>
                </Grid> : null}


        </Grid>

    </>
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
