import React, { useState, useEffect } from 'react'
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import styles from '../styles/QtyBtn.module.css';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
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
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';





export const QtyBtn = ({ row }) => {

    const useStyles = makeStyles((theme) => ({
        root: {
            width: "100%",
            margin: "auto",
            "& .MuiInputBase-input": {
                textAlign: "center",
                height: "3px"
            }
            , "@media (max-width: 768px)":
            {
                "& .MuiInputBase-input": {
                    textAlign: "center",
                }

            }
        }
    }))

    const { products, addToCart } = useGlobalContext()
    const store = require('store')
    const [regularQty, setRegularQty] = useState(row.qty)
    const [error, setError] = useState(false)
    const classes = useStyles()

    let cart = store.get("cart")
    const index = cart.map((item, index) => {
        return { entry_id: item.entry_id, index: index }
    })

    let myIndex = 0

    try {
        myIndex = index.find((i) => {
            return i.entry_id == row.entry_id
        }).index
    } catch (error) {
        myIndex = 0
    }



    const product = products.find((item) => { return (item.id == row.product_id) })

    const { entry } = product

    let productQuantity = entry.filter((ent) => {
        return ent.size == row.size
    }).map((ent) => {
        return ent.qty
    }).reduce((total, current) => {
        return total + current
    })

    let productQuantityLeft = 0

    const handleQuantities = (value) => {

        productQuantityLeft = entry.filter((ent) => {
            return ent.size == row.size
        }).map((ent) => {
            return ent.qty
        }).reduce((total, current) => {
            return total + current
        }) - row.qty

        let cartWithoutProduct = cart.filter((prod) => {
            return row.entry_id !== prod.entry_id
        })

    }

    const handleQuantitiesClick = (value, operation) => {
        productQuantityLeft = entry.filter((ent) => {
            return ent.size == row.size
        }).map((ent) => {
            return ent.qty
        }).reduce((total, current) => {
            return total + current
        }) - row.qty

        let cartWithoutProduct = cart.filter((prod) => {
            return row.entry_id !== prod.entry_id
        })


        let order = value
        if (operation == "Add") {
            order += 1
            setRegularQty(order)

            let withNewQty = { ...row, qty: order }

            addToCart([...cartWithoutProduct, withNewQty])

            cart[myIndex] = withNewQty
            store.set('cart', cart)

            if (value < productQuantityLeft) {
                setError(false)
            }
        } else if (operation == "Remove") {
            order -= 1
            setRegularQty(order)

            let withNewQty = { ...row, qty: order }

            if (order < 1) {
                store.set('cart', [...cartWithoutProduct])
                addToCart([...cartWithoutProduct])
            } else {
                addToCart([...cartWithoutProduct, withNewQty])
                cart[myIndex] = withNewQty
                store.set('cart', cart)
                setError(false)
            }
        }

        if (order > productQuantity) {

            setRegularQty(productQuantity)
            const maxQty = { ...row, qty: productQuantity }
            addToCart([maxQty, ...cartWithoutProduct])
            cart[myIndex] = maxQty
            store.set('cart', cart)
            setError(true)
        } else if (order < 1) {
            setRegularQty(1)
            setError(true)
        }
    }


    return (
        <>
            <Grid container direction="row"
                justifyContent="center"
                alignItems="center" spacing={2}>

                <Grid item xs={12}>
                    <Grid container direction="row"
                        justifyContent="center"
                        alignItems="center">

                        <Grid item lg={4} xs={12} >
                            <div className={styles.grid}>
                                <IconButton aria-label="delete" onClick={() => {
                                    handleQuantitiesClick(parseInt(regularQty), "Remove")
                                }}>
                                    <RemoveIcon sx={{ fontSize: 17 }} />
                                </IconButton>
                            </div>
                        </Grid>

                        <Grid item lg={4} xs={12} >
                            <div className={classes.root}>
                                <OutlinedInput
                                    id="outlined-qty"
                                    value={regularQty}
                                    onChange={(e) => {
                                        alert("cambie")
                                    }}
                                    fullWidth
                                    variant="outlined"
                                    // classes={{ root: { textAlign: 'center' } }}
                                    inputProps={{ type: 'number' }}
                                    error={error}
                                />
                            </div>
                        </Grid>

                        <Grid item lg={4} xs={12}>
                            <div className={styles.grid}>
                                <IconButton aria-label="add more" onClick={() => {
                                    handleQuantitiesClick(parseInt(regularQty), "Add")
                                }}>
                                    <AddIcon sx={{ fontSize: 17 }} />
                                </IconButton>
                            </div>
                        </Grid>
                    </Grid>

                </Grid>
                <Grid item xs={12}>
                    {(error && regularQty >= productQuantity) ? (<Typography variant="caption" color="error" display="block" >
                        Cantidad maxima o minima
                    </Typography>) : ""}
                </Grid>
            </Grid>
        </>
    )
}
