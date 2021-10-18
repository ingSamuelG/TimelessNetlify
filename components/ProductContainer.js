import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import Link from 'next/link'
import ProductCard from './ProductCard';
import Typography from '@mui/material/Typography';
import styles from '../styles/ProductContainer.module.css'
import { useGlobalContext } from '../context';


const ProductContainer = ({ products, hasTittle = true, tittle = products[0].category.name }) => {
    const { setSubmenuClosed } = useGlobalContext()

    return (
        <div className={styles.wrapper} >
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center" className={styles.container} onMouseOver={setSubmenuClosed} spacing={5}>

                <Grid item xs={12}>
                    {hasTittle ? (<Typography variant="h4" gutterBottom>
                        {tittle}
                    </Typography>) : null}

                </Grid>

                {products.map((product) => {

                    return <Link key={product.id} href="/product/[name]" as={`/product/${product.short_description}`}>

                        <Grid item lg={3} md={6} sm={12} xs={12}>
                            <a href="">
                                <ProductCard product={product} />
                            </a>
                        </Grid>

                    </Link>

                })}
            </Grid>
        </div>

    )
}

export default ProductContainer
