
import React from 'react';
import HeadTag from '../../../components/HeadTag';
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

            <HeadTag
                title={`${product.short_description} ${product.brand.name}`}
                description={`${product.long_description}`}
                robotContent={["index", "follow"]}
                keywords={
                    [`comprar ${product.short_description.toLowerCase()}`,
                    `${product.short_description.toLowerCase()}`,
                    `${product.brand.name.toLowerCase()}`,
                    `comprar ${product.brand.name.toLowerCase()}`,
                    `${product.short_description.toLowerCase()} de segunda mano`,
                    `${product.short_description.toLowerCase()} segunda mano`,
                    `${product.brand.name.toLowerCase()} segunda mano`,
                    `${product.brand.name.toLowerCase()} mejor precio`,
                    `oferta ${product.brand.name.toLowerCase()}`,
                    `${product.brand.name.toLowerCase()} oferta`,
                    `${product.short_description.toLowerCase()} oferta`,
                    `${product.short_description.toLowerCase()} en oferta`,
                    `oferta ${product.short_description.toLowerCase()}`,
                    `${product.category.name.toLowerCase()} ${product.brand.name.toLowerCase()}`,
                    `${product.subcategory.name.toLowerCase()} talla ${product.entry[0].size}`,
                    `${product.subcategory.name.toLowerCase()} ${product.entry[0].size}`,
                        "Tienda de ropa",
                        "Tienda en internet",
                        "Tienda de segunda mano",
                        "tiendas en linea",
                        "comprar por internet",
                        "vender ropa usada",
                        "ropa segunda mano",
                        "paginas para comprar",
                        "comprar ropa de segunda mano",
                        "tienda online",
                        "tienda online en mexico",
                        "tienda de ropa de segunda mano",
                        "mejor precio",
                        "zapatos",
                        "comprar zapatos",
                        "comprar zapatos segunda mano",
                        "zapatos segunda mano",
                        "lentes",
                        "comprar lentes",
                        "comprar lentes segunda mano",
                        "lentes segunda mano",
                        "bolsas",
                        "comprar bolsas",
                        "comprar bolsas segunda mano",
                        "bolsas segunda mano"]} />

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