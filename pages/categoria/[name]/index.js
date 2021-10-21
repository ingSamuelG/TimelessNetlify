import React, { useEffect } from 'react'
import styles from '../../../styles/Store.module.css'
import ProductContainer from '../../../components/ProductContainer'
import Button from '@mui/material/Button';
import { useGlobalContext } from '../../../context'
import SideBarFilter from '../../../components/SideBarFilter'
import TuneIcon from '@mui/icons-material/Tune';
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

    console.log(products)

    useEffect(() => {
        setProductFilter(products)
        subCategoryFilterPressed({ name: name, state: true })
    }, [])

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
