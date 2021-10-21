import React, { useEffect } from 'react'
import styles from '../../../styles/Store.module.css'
import ProductContainer from '../../../components/ProductContainer'
import Button from '@mui/material/Button';
import { useGlobalContext } from '../../../context'
import SideBarFilter from '../../../components/SideBarFilter'
import TuneIcon from '@mui/icons-material/Tune';
import { data } from '../../../PublicData'
import { useRouter } from 'next/router';

export default function Subcategoria({ products }) {
    const router = useRouter()
    const { subcategoria } = router.query


    const { productFilter, setFilterSideBarOpen, colorPressed, subCategoriesPressed, categoriesPressed, sizePressed, brandPressed, setProductFilter, subCategoryFilterPressed } = useGlobalContext()

    useEffect(() => {
        setProductFilter(products)
        subCategoryFilterPressed({ name: subcategoria, state: true })
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
            <ProductContainer products={products} hasTittle={false} tittle="" />
            <SideBarFilter></SideBarFilter>
        </div>
    )

}

export async function getServerSideProps(context) {

    const products = data.products.filter(product => product.subcategory.name.toLowerCase == context.params.subcategoria)

    return {
        props: {
            products,
        }, // will be passed to the page component as props
    }
}

Subcategoria.layout = 'main'
