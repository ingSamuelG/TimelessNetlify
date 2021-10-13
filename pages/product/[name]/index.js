
import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../../../styles/ProductPage.module.css'
import Grid from '@mui/material/Grid';
import { data } from '../../../PublicData'
import ProductDes from '../../../components/ProductDes';
import { useGlobalContext } from '../../../context'
import ProductGallery from '../../../components/ProductGallery';
import ProductContainer from '../../../components/ProductContainer'


export default function ProductPage({ product }) {
    const { setSubmenuClosed, products } = useGlobalContext()

    // this code is only for front end testing propuse we shuld get the product from a api or fetch
    // const router = useRouter()
    // const { name } = router.query




    return (
        <div className={styles.container} onMouseOver={setSubmenuClosed}>
            <Grid container spacing={2} direction='row' justifyContent='center' alignItems='center'>
                <Grid item lg={6} xs={12}>
                    <ProductGallery images={product.images} />
                </Grid>

                <Grid item lg={6} xs={12}>
                    <ProductDes product={product} />
                </Grid>

                <Grid item lg={12} xs={12}>
                    <ProductContainer products={products.filter(product => product.category.name === 'Ropa')} tittle='Productos Relacionados' />
                </Grid>
            </Grid>
        </div>
    )
}

// this code is only for front end testing propuse we shuld get the product from a api or fetch

export const getStaticProps = async (context) => {
    const product = data.products.filter((product) => product.short_description === context.params.name)[0]
    return {
        props: {
            product,
        },
    }
}

export const getStaticPaths = async () => {
    const names = data.products.map(product => product.short_description)

    const paths = names.map((name => ({ params: { name: name.toString() } })))

    return { paths, fallback: false }
}


ProductPage.layout = 'main'