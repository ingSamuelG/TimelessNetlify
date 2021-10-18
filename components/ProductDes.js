import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';
import { QtyBtnAddToCart } from './QtyBtnAddToCart';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import { useGlobalContext } from '../context';
import SizeRadio from './SizeRadio';
import ProductAccor from './ProductAccor';
import styles from '../styles/ProductDes.module.css'


// tengo que usar porp dirriling con sizeselecte no tiene sentido usar el contexto global

const ProductDes = ({ product }) => {
    const store = require('store')
    const { addToCart } = useGlobalContext()
    const { entry } = product
    const [size, setSize] = useState("")
    const [qty, setQty] = useState(1)


    let productQuantity = 0
    let productInCart = 0


    useEffect(() => {
        setSize(entry[0].size)

    }, [])

    try {
        productQuantity = entry.filter((ent) => {
            return ent.size == size
        }).map((ent) => {
            return ent.qty
        }).reduce((total, current) => {
            return total + current
        })

        console.log(`productQuantity es :${productQuantity}`)

    } catch (error) {
        productQuantity = entry[0].qty
        console.log("entre por error" + productQuantity);
    }

    try {
        productInCart = store.get("cart").find((order) => {
            return (order.product_id == product.id) && (order.size == size)
        }).qty
        console.log(`productInCart es :${productInCart}`)
    } catch (error) {

        console.log("entre por error en porduct cart" + productInCart);
    }



    // store.set('cart', [])
    const handleAddtoCart = () => {
        let localCart = store.get('cart')


        let ProductInLocal = localCart.find((prod) => {
            return (prod.product_id == product.id) && (prod.size == size)
        })



        if (ProductInLocal) {
            let cartWithoutProduct = localCart.filter((prod) => {
                return (product.id !== prod.product_id) || (prod.size !== size)
            })


            let withNewQty = { ...ProductInLocal, qty: ProductInLocal.qty + qty, size: size ? size : entry[0].size }
            addToCart([...cartWithoutProduct, withNewQty])
            store.set('cart', [...cartWithoutProduct, withNewQty])
        } else {

            const newProduct = { entry_id: `${product.id}-${size ? size : entry[0].size}`, product_id: product.id, short_description: product.short_description, price: product.discount_price, img: product.images[0], size: size ? size : entry[0].size, qty: qty }

            addToCart([...localCart, newProduct])
            store.set('cart', [...localCart, newProduct])
        }

        if (productInCart == 0) {
            setQty(productQuantity - qty)
        } else {
            setQty(1)
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
                    })} lSize={size} fun={setSize} setQty={setQty} />

                </Grid>

                <Grid item xs={12}>
                    <QtyBtnAddToCart product={product} qtyInCart={productInCart} size={size} qty={qty} fun={setQty} />
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
