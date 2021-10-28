import React, { useEffect } from 'react'
import styles from '../../../styles/Store.module.css'
import ProductContainer from '../../../components/ProductContainer'
import Button from '@mui/material/Button';
import { useGlobalContext } from '../../../context'
import SideBarFilter from '../../../components/SideBarFilter'
import TuneIcon from '@mui/icons-material/Tune';
import HeadTag from '../../../components/HeadTag';
import { data } from '../../../PublicData'
import { useRouter } from 'next/router';



export default function Index() {
    const router = useRouter()
    const { name } = router.query


    const { productFilter, setFilterSideBarOpen, colorPressed, subCategoriesPressed, categoriesPressed, sizePressed, brandPressed, setProductFilter, subCategoryFilterPressed } = useGlobalContext()

    let id = 1

    try {
        id = data.categories.find((category) => category.name.toLowerCase() == name).id
    } catch (error) {
        id = 1
    }

    let products = data.products.filter((product) => {
        return product.category.id == id
    })


    // useEffect(() => {
    //     setProductFilter(products)
    //     subCategoryFilterPressed({ name: name, state: true })
    // }, [])

    const anyFilterPressed = (colorPressed.state || subCategoriesPressed.state || categoriesPressed.state || sizePressed.state)

    const arrayOfPressed = [colorPressed.state, subCategoriesPressed.state, categoriesPressed.state, sizePressed.state, brandPressed.state]


    const howManyFiltersPressed = () => {
        let i = 0
        arrayOfPressed.forEach((item) => {
            item ? i++ : i + 0
        })

        return i
    }


    return (
        <div className={styles.container}>
            <HeadTag
                title={"Timeless Closet store"}
                description={"Nuestra tienda vende los marcas mas elegantes del mercado a un clic de distancia con toda la seguridad y tranquilidad que ofrece nuestro sitio"}
                robotContent={["index", "follow"]}
                keywords={
                    ["Tienda de ropa",
                        "Tienda en internet",
                        "Tienda de segunda mano",
                        "tiendas en linea",
                        "comprar por internet",
                        "vender ropa usada",
                        "ropa segunda mano",
                        "paginas para comprar",
                        "comprar ropa de segunda mano",
                        "ropa moschino",
                        "tienda online",
                        "tienda online en mexico",
                        "ropa fendi",
                        "tienda de ropa de segunda mano",
                        "ropa calzedonia",
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
            <Button className={styles.filterBtn} variant={`${anyFilterPressed ? 'contained' : 'outlined'}`} disableElevation startIcon={<TuneIcon />} onClick={() => {
                setFilterSideBarOpen(true)
            }}>
                {`Filtrar ${anyFilterPressed ? `(${howManyFiltersPressed()})` : ''}`}
            </Button>
            <ProductContainer products={productFilter} hasTittle={false} tittle="" />
            <SideBarFilter></SideBarFilter>
        </div>
    )

}

// this code is only for front end testing propuse we shuld get the product from a api or fetch

// export const getStaticProps = async (context) => {
//     const id = data.categories.find((category) => category.name.toLowerCase() == context.params.name).id

//     const products = data.products.filter((product) => {
//         return product.category.id == id
//     })

//     return {
//         props: {
//             products,
//         },
//     }
// }

// export const getStaticPaths = async () => {
//     const subcategorias = data.categories.map(category => category.name.toLowerCase())

//     const paths = subcategorias.map((name => ({ params: { name: name.toString() } })))

//     return { paths, fallback: false }
// }


// export async function getServerSideProps(context) {
//     const id = data.categories.find((category) => category.name.toLowerCase() == context.params.name).id

//     const products = data.products.filter((product) => {
//         return product.category.id == id
//     })

//     return {
//         props: {
//             products,
//         },
//     }

// }


Index.layout = 'main'
