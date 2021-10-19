import React, { useState, useEffect } from 'react'
import styles from '../styles/QtyProduct.module.css';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import Typography from '@mui/material/Typography';
import RemoveIcon from '@mui/icons-material/Remove';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddIcon from '@mui/icons-material/Add';
import { useGlobalContext } from '../context';
import Grid from '@mui/material/Grid';





export const QtyBtnAddToCart = ({ product, qtyInCart = 0, size, qty, fun }) => {
    const { entry } = product

    let productQuantity = 0

    const [error, setError] = useState(false)

    const handleQuantities = (value) => {
        if (size) {
            productQuantity = entry.filter((ent) => {
                return ent.size == size
            }).map((ent) => {
                return ent.qty
            }).reduce((total, current) => {
                return total + current
            }) - qtyInCart

        } else {
            productQuantity = entry[0].qty
        }

        if (value > productQuantity - 1) {
            fun(productQuantity)
            setError(true)
        } else {
            fun(value)
            setError(false)
        }
    }

    const handleQuantitiesClick = (value, operation) => {
        if (size) {
            productQuantity = entry.filter((ent) => {
                return ent.size == size
            }).map((ent) => {
                return ent.qty
            }).reduce((total, current) => {
                return total + current
            }) - qtyInCart


        } else {
            productQuantity = entry[0].qty
        }

        let order = value
        if (operation == "Add") {
            order += 1
            fun(order)
            if (value < productQuantity) {
                setError(false)
            }
        } else if (operation == "Remove") {
            order -= 1
            fun(order)
            setError(false)
        }

        if (order > productQuantity) {
            fun(productQuantity)
            setError(true)
        } else if (order < 1) {
            fun(1)
            setError(true)
        }

    }


    return (
        <div>
            <Grid container direction="row"
                justifyContent="center"
                alignItems="center" spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="caption" display="block" >
                        Cantidad:
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Grid container direction="row"
                        justifyContent="center"
                        alignItems="center">

                        <Grid item  >
                            <div className={styles.grid}>
                                <IconButton aria-label="delete" onClick={() => {
                                    handleQuantitiesClick(parseInt(qty), "Remove")
                                }}>
                                    <RemoveIcon sx={{ fontSize: 17 }} />
                                </IconButton>
                            </div>
                        </Grid>

                        <Grid item >
                            <div className={`${styles.number}`}>
                                <OutlinedInput
                                    id="outlined-qty"
                                    value={qty}
                                    onChange={(e) => {
                                        handleQuantities(parseInt(e.target.value))
                                    }}
                                    fullWidth
                                    style={{ textAlign: 'center' }}
                                    inputProps={{ type: 'number' }}
                                    sx={{ height: '40px' }}
                                    error={error}
                                />
                            </div>
                        </Grid>

                        <Grid item>
                            <div className={styles.grid}>
                                <IconButton aria-label="add more" onClick={() => {
                                    handleQuantitiesClick(parseInt(qty), "Add")
                                }}>
                                    <AddIcon sx={{ fontSize: 17 }} />
                                </IconButton>
                            </div>
                        </Grid>
                    </Grid>

                </Grid>
                <Grid item xs={12}>
                    {(error && qty >= productQuantity) ? (<Typography variant="caption" color="error" display="block" >
                        Cantidad maxima o minima
                    </Typography>) : ""}
                </Grid>
            </Grid>
        </div>
    )
}
