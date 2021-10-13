import React from 'react'
import ProductContainer from '../../components/ProductContainer'
import styles from '../../styles/Store.module.css'
import Button from '@mui/material/Button';
import { useGlobalContext } from '../../context'
import SideBarFilter from '../../components/SideBarFilter'
import TuneIcon from '@mui/icons-material/Tune';

const Index = () => {
    const { productsFilter, setFilterSideBarOpen, colorPressed, subCategoriesPressed, categoriesPressed, sizePressed, brandPressed } = useGlobalContext()

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
            <ProductContainer products={productsFilter} hasTittle={false} />
            <SideBarFilter></SideBarFilter>
        </div>
    )
}


Index.layout = 'main'

export default Index
