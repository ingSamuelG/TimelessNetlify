import React from 'react'
import ProductContainer from '../../components/ProductContainer'
import styles from '../../styles/Store.module.css'
import Button from '@mui/material/Button';
import HeadTag from '../../components/HeadTag';
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
            <Button className={styles.filterBtn} style={{ position: "sticky" }} variant={`${anyFilterPressed ? 'contained' : 'outlined'}`} disableElevation startIcon={<TuneIcon />} onClick={() => {
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
