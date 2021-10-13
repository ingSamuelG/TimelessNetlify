import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';
import { QtyBtn } from './QtyBtn';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import { useGlobalContext } from '../context';
import SizeRadio from './SizeRadio';
import ProductAccor from './ProductAccor';
import styles from '../styles/ProductDes.module.css'



const ProductDes = ({ product }) => {
    const store = require('store')
    const { sizeSelected, qtySelected, setSelecteSize, addToCart, setSelecteQty } = useGlobalContext()

    let productQuantity = 0
    let productInCart = 0
    const { entry } = product

    try {
        productQuantity = entry.filter((ent) => {
            return ent.size == sizeSelected
        }).map((ent) => {
            return ent.qty
        }).reduce((total, current) => {
            return total + current
        })

        // console.log(`productQuantity es :${productQuantity}`)

    } catch (error) {
        setSelecteSize(entry[0].size)
    }

    try {
        productInCart = store.get("cart").find((order) => {
            return (order.product_id == product.id) && (order.size == sizeSelected)
        }).qty
        // console.log(`productInCart es :${productInCart}`)
    } catch (error) {
        productInCart = 0
    }



    // store.set('cart', [])
    const handleAddtoCart = () => {
        let localCart = store.get('cart')


        let ProductInLocal = localCart.find((prod) => {
            return (prod.product_id == product.id) && (prod.size == sizeSelected)
        })


        if (ProductInLocal) {
            let cartWithoutProduct = localCart.filter((prod) => {
                return (product.id !== prod.product_id) || (prod.size !== sizeSelected)
            })

            console.log(cartWithoutProduct);


            let withNewQty = { ...ProductInLocal, qty: ProductInLocal.qty + qtySelected, size: sizeSelected }
            addToCart([...cartWithoutProduct, withNewQty])
            store.set('cart', [...cartWithoutProduct, withNewQty])
        } else {

            const newProduct = { product_id: product.id, short_description: product.short_description, price: product.discount_price, size: sizeSelected, qty: qtySelected }
            addToCart([...localCart, newProduct])
            store.set('cart', [...localCart, newProduct])
        }

        if (productInCart == 0) {
            setSelecteQty(productQuantity - qtySelected)
        } else {
            setSelecteQty(1)
        }


    }

    return (
        // <Link href={`/product/${product.slug}`} >
        <div className={styles.container}>
            <Grid container direction="row"
                justifyContent="center"
                alignItems="center" spacing={2}>
                <Grid item xs={12}>
                    <Typography variant='h6' color='secondary' gutterBottom>
                        {product.brand.name}
                    </Typography>
                    <Divider />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='body2'>
                        {product.short_description}
                    </Typography>
                </Grid>
                <Grid item xs={12}>

                    <Grid container direction="row"
                        justifyContent="center"
                        alignItems="center" spacing={2}>
                        <Grid item xs={4}>

                            <Typography variant='body2' display="inline">
                                Precio retail estimado :
                            </Typography>
                        </Grid>

                        <Grid item xs={8}>
                            <Typography variant='h5' display="inline" style={{ textDecoration: 'line-through' }}>
                                {` $${product.real_price}`}
                            </Typography>
                        </Grid>

                    </Grid>
                </Grid>

                <Grid item xs={12}>

                    <Grid container direction="row"
                        justifyContent="center"
                        alignItems="center" spacing={2}>

                        <Grid item xs={4}>
                            <Typography variant='body2' display="inline">
                                Precio timeless :
                            </Typography>
                        </Grid>

                        <Grid item xs={8}>
                            <Typography variant='h4' display="inline" color='secondary'>
                                {` $${product.discount_price}`}
                            </Typography>

                            <Typography variant='h6' display="inline" style={{ color: 'red' }}>
                                {` -${(product.discount * 100).toFixed(0)}%`}
                            </Typography>
                        </Grid>

                    </Grid>

                    <SizeRadio sizes={product.entry.map((entry) => {
                        return entry['size']
                    })} />

                </Grid>

                <Grid item xs={12}>
                    <QtyBtn product={product} qtyInCart={productInCart} />
                </Grid>

                <Grid item xs={12}>
                    <ProductAccor description={{ long_description: product.long_description, condition: product.condition, composition: product.composition }} />
                </Grid>

                <Grid item xs={12}>
                    <Button
                        variant="contained"
                        color="primary"
                        endIcon={<AddShoppingCartIcon />}
                        fullWidth
                        disabled={(productQuantity <= productInCart)}
                        onClick={() => {
                            handleAddtoCart()
                        }}
                    >
                        Agregar al carrito
                    </Button>
                </Grid>

                <Grid item xs={12}>
                    <Button
                        variant="outlined"
                        endIcon={<FavoriteBorderIcon />}
                        fullWidth
                    >
                        Me gusta
                    </Button>
                </Grid>
            </Grid>

        </div>
        // </Link >

    )
}

export default ProductDes
