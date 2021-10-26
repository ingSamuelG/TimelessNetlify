import HeadTag from '../components/HeadTag';
import Image from 'next/image'
import Link from 'next/link'
import Slider from '../components/NavBarSlider'
import styles from '../styles/Home.module.css'
import Grid from '@mui/material/Grid';
import { useGlobalContext } from '../context'
import ProductContainer from '../components/ProductContainer'

export default function Home({ data }) {
  const { setSubmenuClosed, products } = useGlobalContext()

  const recetas = data.cat

  return (
    <div className={styles.wrapper}>
      <HeadTag
        title={"La mejor tienda con marcas elegantes"}
        description={"Una tienda con las marcas mas cotizadas y elegantes a un precio accesible"}
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
            "bolsas segunda mano"
          ]} />
      <Grid container direction="row" justifyContent="center"
        alignItems="center" >

        <Grid item xs={12} style={{ textAlign: 'center' }}>
          <Slider />
        </Grid>
        <Grid item xs={12}>
          <div className={styles.separetor}></div>
        </Grid>
        <Grid item xs={12}>
          <ProductContainer products={products.filter(product => product.category.name === 'Ropa')} />
        </Grid>
        <Grid item xs={12}>
          <ProductContainer products={products.filter(product => product.category.name === 'Zapatos')} />
        </Grid>
        <Grid item xs={12}>
          <ProductContainer products={products.filter(product => product.category.name === 'Accesorios')} />
        </Grid>
        <Grid item xs={12}>
          <ProductContainer products={products.filter(product => product.category.name === 'Bolsa')} />
        </Grid>
      </Grid>
    </div>

  )
}

Home.layout = 'main'

export function getStaticProps() {
  return {
    props: {
      data: {
        cat: [{ titulo: "Smothie de pina" }]
      }
    }
  }
}